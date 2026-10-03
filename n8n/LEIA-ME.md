# Agente de Atendimento no Telegram (n8n) — versão 2

Lojas: **Sigilo**, **Surpresinhas** e **Seu Fetiche**.

## Como funciona

```
Cliente no Telegram (bot da loja)
        ↓
ATENDENTE (Claude) ── conversa, vende, fecha o pedido
   ├─ especialista_produtos ──→ ESPECIALISTA (Claude) ──→ catálogo da Nuvemshop
   ├─ consultar_entrega_motoboy ──→ Supabase (CEP, taxa, horários, feriados)
   ├─ consultar_pedido ──→ Bling (só pedidos desta loja + CPF conferido)
   ├─ gerar_link_pagamento ──→ Nuvemshop (pedido rascunho → link Pix/cartão)
   ├─ registrar_venda ──→ grupo da equipe no Telegram
   └─ chamar_equipe ──→ grupo da equipe no Telegram
```

| Arquivo | Quantas cópias |
|---|---|
| `agente-atendimento-telegram.json` (Atendente) | **3**, uma por loja |
| `especialista-produtos.json` (Especialista) | **3**, uma por loja |
| `consultar-pedido-bling.json` (Consulta de pedido) | **1**, usada pelas 3 |
| `supabase-entrega-motoboy.sql` | Já está aplicado no Supabase. Fica só como registro |

### Por que uma loja não vê a outra
- **Produtos e pagamento:** cada loja usa a **chave da própria Nuvemshop**.
- **Pedidos:** o Bling é um só, então a consulta aceita apenas os **IDs multiloja da marca** (tabela abaixo). Esses IDs ficam fixos no fluxo e a IA não consegue trocar. Além disso, o CPF informado precisa ser o do pedido.
- **Entrega:** a taxa e a área são buscadas pela chave da loja (`sigilo`, `surpresinhas`, `seufetiche`).
- **Memória:** cada conversa é guardada separada por loja + cliente.

### IDs multiloja do Bling (tirados da sua tabela `bling_supabase.lojas`)

| Loja | idsLojaBling (copiar exatamente) |
|---|---|
| Sigilo | `204636452,203466110,204265522,204266326` |
| Surpresinhas | `204127665,204266330` |
| Seu Fetiche | `205023189` |

---

## Entrega por motoboy (já está no Supabase "BASE DO EDU")

- **Tabela `entrega_motoboy_faixas`:** cidades/faixas de CEP e taxa **por loja**. Os valores vieram da sua planilha "Motoboy Faixas, Bairro e Cidade".
- **Tabela `entrega_motoboy_janelas`:** os horários de cada loja.

| Faixa | Horário | Cliente precisa fechar até |
|---|---|---|
| 1ª | 11h às 14h | 10h59 |
| 2ª | 14h às 17h | 13h59 |
| 3ª | 17h às 20h | 16h59 |
| 4ª | 19h30 às 22h30 | 19h29 |

- **Regra:** o agente só oferece horários que ainda dá tempo de cumprir. Se o horário de hoje passou, ele oferece o próximo dia. Ele pula **domingo** e **feriados** (nacional, Paraná e Curitiba, da sua tabela `tve_feriados`).
- **Para mudar taxa ou horário:** Supabase → Table Editor → abra a tabela → edite a célula. O agente usa o valor novo na hora, sem mexer no n8n.

---

## Passo a passo

### 1. Credenciais no n8n (criar uma vez)

| Credencial | Tipo no n8n | Quantas |
|---|---|---|
| Bling | OAuth2 API | 1 (as 3 lojas estão no mesmo Bling) |
| Supabase | Postgres | 1 |
| Anthropic | Anthropic | 1 |
| Telegram | Telegram API | 3 (um bot por loja) |
| Nuvemshop | Header Auth | 3 (uma por loja) |

**Bling (OAuth2 API):**
1. No Bling: Preferências > Sistema > Central de Extensões > Área do Integrador > Criar aplicativo.
2. Escopos: Pedidos de Venda, Situações (leitura).
3. Link de redirecionamento: o "OAuth Redirect URL" que o n8n mostra na tela da credencial.
4. No n8n: Grant Type `Authorization Code`; Authorization URL `https://www.bling.com.br/Api/v3/oauth/authorize`; Access Token URL `https://www.bling.com.br/Api/v3/oauth/token`; Client ID e Secret do app; Scope vazio; Authentication `Header`. Depois clique em **Connect**.

**Supabase (Postgres):** no Supabase, abra o projeto BASE DO EDU → botão **Connect** → *Session pooler*. Copie Host, Port, Database e User, e use a senha do banco. Ative **SSL**.

**Telegram:** um bot por loja, criado no **@BotFather** com `/newbot`. Cole o token.

**Nuvemshop (Header Auth):** Name = `Authentication`, Value = `bearer SEU_TOKEN`. Para conseguir o token é preciso criar um "app" no Portal de Parceiros da Nuvemshop e instalar em cada loja. **Esse passo eu faço junto com você.**

### 2. Importar, nesta ordem
1. `consultar-pedido-bling.json`: escolha a credencial **Bling** nos 3 blocos de busca. Salve.
2. `especialista-produtos.json` (3 vezes, um por loja): no bloco **Config**, preencha nome e ID da loja na Nuvemshop. Credenciais: Anthropic e Nuvemshop daquela loja. Troque `SEU-EMAIL-AQUI` no bloco *buscar_produtos* pelo seu e-mail (a Nuvemshop exige). Salve como "Especialista - Sigilo" etc.
3. `agente-atendimento-telegram.json` (3 vezes):
   - **Config da Loja:** preencha tudo. Em `loja`, deixe só uma palavra: `sigilo`, `surpresinhas` ou `seufetiche`. Em `idsLojaBling`, use a tabela acima.
   - **especialista_produtos:** escolha o Especialista **desta loja**.
   - **consultar_pedido:** escolha "Telegram - Consultar Pedido Bling".
   - Credenciais: Telegram (desta loja), Nuvemshop (desta loja), Supabase, Anthropic.
   - Troque `SEU-EMAIL-AQUI` no bloco *gerar_link_pagamento*.
   - Salve e **ative**.

### 3. Grupo da equipe
Crie um grupo no Telegram com a equipe e coloque o bot da loja nele. Para descobrir o Chat ID, adicione o **@RawDataBot** no grupo e copie o número que começa com **-100**. Depois pode remover o @RawDataBot.

---

## O que testar primeiro
1. `/start` e uma pergunta de produto: o especialista acha o produto certo?
2. Um CEP de Curitiba, um de São José e um de São Paulo: o motoboy, a taxa e os horários saem certos?
3. Um pedido real com número + CPF certo, e depois com CPF errado.
4. **Link de pagamento:** o link abre o checkout? Aceita Pix e cartão? Aceita o cupom?
5. **Taxa do motoboy no pagamento:** ainda não sei se a Nuvemshop deixa incluir a taxa no pedido rascunho. Se não deixar, a solução é criar na Nuvemshop um produto oculto "Entrega Motoboy" com variações R$ 21, 22, 30, 40 e 60. Depois é só preencher `variantesTaxaMotoboy` no Config, por exemplo `{"21": 111, "22": 222, "40": 333}`, onde cada número é o variant_id da variação.

## Cuidados
- **Um bot = um fluxo ativo.** Clicar em "Test workflow" com o fluxo ativo desvia as mensagens. Para testar, use um bot separado.
- **O n8n precisa de endereço público com HTTPS.**
