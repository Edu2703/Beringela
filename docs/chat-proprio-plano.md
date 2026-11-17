# Chat próprio: atendimento com IA (plano)

Atualizado em 17/11/2026. Status: aguardando 2 respostas para iniciar a Fase 1.

## Decisões já tomadas
- Canais: Instagram Direct, Facebook Messenger, TikTok (TikTok fica para depois: o Direct do TikTok só é liberado para parceiros aprovados).
- Atendimento: a IA responde tudo.
- Caminho: base pronta e personalizada (Chatwoot, gratuito e de código aberto, em servidor próprio).
- Lead qualificado: pessoa que demonstrou interesse em um produto.

## Estrutura
- **Chatwoot**: caixa de entrada única (Instagram + Facebook).
- **n8n**: central de regras (recebe a mensagem, consulta o catálogo, chama a IA e devolve a resposta).
- **IA (Claude)**: atende como vendedora de cada loja (Sigilo, Surpresinhas, Seu Fetiche) e marca etiquetas como "interesse: X" e "loja: Y".
- **Catálogo da loja**: preços e links reais, para a IA não inventar.

## O que precisa ser providenciado
1. Servidor VPS (ex.: Hostinger), em torno de R$ 40 a R$ 80 por mês.
2. Conta de desenvolvedor Meta + verificação da empresa (CNPJ). A análise leva de dias a semanas.
3. Instagram de cada loja como conta Profissional, ligado a uma Página do Facebook.
4. Chave da API do Claude (cobrança por uso).

## Pontos de atenção
- **Nicho adulto**: a IA fala de forma discreta, sem termos explícitos, e manda o cliente para o link do site. Isso evita restrição da Meta.
- **Regra das 24h**: só é possível responder livremente até 24h depois da última mensagem do cliente.
- **TikTok**: sem integração nativa no Chatwoot. Avaliar depois, provavelmente só com resposta a comentários.

## Fases
1. Instalar o Chatwoot e conectar Instagram + Facebook → teste: mensagem do Direct aparece no Chatwoot.
2. Ligar a IA via n8n → teste: a IA responde sozinha e coloca a etiqueta de interesse.
3. Conectar o catálogo → teste: perguntar por um produto e receber preço e link corretos.
4. Painel de leads, para fazer remarketing.

## Pendências (retomar aqui)
1. Em que plataforma ficam as lojas? (Nuvemshop, WooCommerce, ou cada uma numa diferente?)
2. Já existe VPS na Hostinger, ou é preciso contratar? (Mostrar plano e preço antes de contratar.)
