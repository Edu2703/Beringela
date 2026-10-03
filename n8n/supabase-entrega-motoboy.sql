-- Entrega por motoboy: áreas (faixas de CEP), taxas e horários por loja.
-- JÁ APLICADO no Supabase "BASE DO EDU" em 03/10/2026. Guardado aqui só como registro.
-- Usa a tabela de feriados que já existia: public.tve_feriados.

create table public.entrega_motoboy_faixas (
  id bigint generated always as identity primary key,
  loja text not null check (loja in ('sigilo','surpresinhas','seufetiche')),
  regiao text not null,
  cep_inicio integer not null,
  cep_fim integer not null,
  taxa numeric(10,2) not null check (taxa >= 0),
  ativo boolean not null default true,
  atualizado_em timestamptz not null default now(),
  check (cep_inicio <= cep_fim)
);
comment on table public.entrega_motoboy_faixas is 'Área atendida pelo motoboy: faixas de CEP e taxa, por loja. Usada pelo agente do Telegram.';
create index entrega_motoboy_faixas_busca on public.entrega_motoboy_faixas (loja, cep_inicio, cep_fim) where ativo;
alter table public.entrega_motoboy_faixas enable row level security;

create table public.entrega_motoboy_janelas (
  id bigint generated always as identity primary key,
  loja text not null check (loja in ('sigilo','surpresinhas','seufetiche')),
  nome text not null,
  inicio time not null,
  fim time not null,
  pedir_ate time not null,
  dias_semana smallint[] not null default '{1,2,3,4,5,6}',
  ativo boolean not null default true,
  check (inicio < fim and pedir_ate <= inicio)
);
comment on table public.entrega_motoboy_janelas is 'Faixas de horário do motoboy por loja. pedir_ate = horário limite no mesmo dia. dias_semana: 0=domingo ... 6=sábado.';
alter table public.entrega_motoboy_janelas enable row level security;

create or replace function public.consultar_entrega_motoboy(p_loja text, p_cep text)
returns jsonb
language plpgsql
stable
set search_path = public
as $$
declare
  v_digitos text := regexp_replace(coalesce(p_cep, ''), '\D', '', 'g');
  v_cep integer;
  v_faixa record;
  v_agora timestamp := now() at time zone 'America/Sao_Paulo';
  v_dia date;
  v_opcoes jsonb := '[]'::jsonb;
  v_nomes text[] := array['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
  j record;
  i integer;
begin
  if length(v_digitos) <> 8 then
    return jsonb_build_object('erro', 'CEP inválido. Peça ao cliente o CEP com 8 números.');
  end if;
  v_cep := v_digitos::integer;

  select regiao, taxa into v_faixa
  from entrega_motoboy_faixas
  where loja = p_loja and ativo and v_cep between cep_inicio and cep_fim
  order by (cep_fim - cep_inicio)
  limit 1;

  if not found then
    return jsonb_build_object('atende', false,
      'mensagem', 'CEP fora da área do motoboy. A entrega é pelo frete normal (Correios/transportadora), calculado no checkout.');
  end if;

  for i in 0..7 loop
    v_dia := v_agora::date + i;
    continue when exists (
      select 1 from tve_feriados f
      where f.data = v_dia and f.abrangencia in ('nacional', 'parana', 'curitiba'));
    for j in
      select * from entrega_motoboy_janelas
      where loja = p_loja and ativo and extract(dow from v_dia)::smallint = any(dias_semana)
      order by inicio
    loop
      if i > 0 or v_agora::time <= j.pedir_ate then
        v_opcoes := v_opcoes || jsonb_build_object(
          'dia', case i when 0 then 'hoje' when 1 then 'amanhã' else v_nomes[extract(dow from v_dia)::int + 1] end,
          'data', to_char(v_dia, 'DD/MM/YYYY'),
          'faixa', j.nome,
          'horario', 'entre ' || to_char(j.inicio, 'HH24"h"MI') || ' e ' || to_char(j.fim, 'HH24"h"MI'),
          'pagar_ate', case when i = 0 then to_char(j.pedir_ate, 'HH24"h"MI') || ' de hoje' else null end);
      end if;
    end loop;
    exit when jsonb_array_length(v_opcoes) >= 4;
  end loop;

  return jsonb_build_object(
    'atende', true,
    'regiao', v_faixa.regiao,
    'taxa', v_faixa.taxa,
    'agora', to_char(v_agora, 'DD/MM/YYYY HH24:MI'),
    'proximas_entregas', (select jsonb_agg(e) from (select e from jsonb_array_elements(v_opcoes) e limit 4) s));
end;
$$;
revoke execute on function public.consultar_entrega_motoboy(text, text) from public, anon, authenticated;

-- Horários (da planilha "Motoboy Faixas, Bairro e Cidade" + 4ª faixa 19h30–22h30)
insert into public.entrega_motoboy_janelas (loja, nome, inicio, fim, pedir_ate)
select l, n, ini, fim, ate
from unnest(array['sigilo','surpresinhas','seufetiche']) l
cross join (values
  ('1ª faixa', '11:00'::time, '14:00'::time, '10:59'::time),
  ('2ª faixa', '14:00', '17:00', '13:59'),
  ('3ª faixa', '17:00', '20:00', '16:59'),
  ('4ª faixa', '19:30', '22:30', '19:29')
) as v(n, ini, fim, ate);

-- Áreas e taxas (aba "Cidade e RMC" da planilha). Curitiba: Surpresinhas R$ 21, Sigilo e Seu Fetiche R$ 22.
insert into public.entrega_motoboy_faixas (loja, regiao, cep_inicio, cep_fim, taxa)
select l, c, ini, fim,
       case when c = 'Curitiba' and l <> 'surpresinhas' then 22.00 else t end
from unnest(array['sigilo','surpresinhas','seufetiche']) l
cross join (values
  ('Curitiba',              80000001, 82999999, 21.00),
  ('São José dos Pinhais',  83000001, 83099999, 40.00),
  ('Pinhais',               83320000, 83329999, 40.00),
  ('Piraquara',             83300001, 83319999, 40.00),
  ('Colombo',               83400001, 83419999, 40.00),
  ('Quatro Barras',         83420000, 83429999, 60.00),
  ('Campina Grande do Sul', 83430000, 83449999, 60.00),
  ('Almirante Tamandaré',   83500001, 83534999, 40.00),
  ('Campo Magro',           83535000, 83539999, 30.00),
  ('Campo Largo',           83600001, 83649999, 40.00),
  ('Araucária',             83700001, 83729999, 40.00),
  ('Mandirituba',           83800000, 83819999, 40.00),
  ('Fazenda Rio Grande',    83820001, 83839999, 40.00)
) as v(c, ini, fim, t);
