# Agente de Atendimento no Telegram (n8n)

Arquivo do fluxo: `agente-atendimento-telegram.json`

## Como as 3 lojas ficam separadas

Cada loja tem **uma cópia própria** deste fluxo, com:

- o **bot do Telegram** dela (token próprio);
- a **conexão com o Bling** dela (credencial própria);
- o bloco **"Config da Loja"** preenchido com nome, condições e cupom dela.

O agente da Sigilo só tem acesso à credencial do Bling da Sigilo. Ele não
consegue consultar a Surpresinhas nem por engano. A separação vem da
estrutura do fluxo, e não só do texto de instrução da IA.

## O que o agente faz

| Ferramenta | O que faz |
|---|---|
| buscar_produtos | Consulta preço e estoque no Bling |
| consultar_pedido_por_numero | Acha o pedido pelo número |
| detalhes_do_pedido | Itens, valores, rastreio |
| consultar_situacao | Traduz o status (Em aberto, Enviado…) |
| registrar_venda | Manda a venda fechada para o grupo da equipe |
| chamar_equipe | Chama um humano no grupo da equipe |

Para mostrar um pedido, o agente pede o **número do pedido + CPF**. Se o CPF
não for o do pedido, ele não mostra nada.

---

## Passo a passo (repetir para cada loja)

### 1. Criar o bot no Telegram
1. No Telegram, procure **@BotFather** e mande `/newbot`.
2. Escolha o nome (ex.: "Sigilo Atendimento") e o usuário (ex.: `sigilo_atendimento_bot`).
3. Guarde o **token** que ele mandar.

### 2. Criar o grupo da equipe
1. Crie um grupo no Telegram com a equipe da loja e adicione o bot nele.
2. Para descobrir o **Chat ID** do grupo, adicione também o bot **@RawDataBot**.
   Ele responde com um texto. Copie o número que aparece em `"chat": { "id": -100...`
   (começa com **-100**). Depois pode remover o @RawDataBot.

### 3. Criar o app no Bling (uma vez por conta Bling)
1. No Bling: **Preferências > Sistema > Central de Extensões > Área do Integrador > Criar aplicativo**.
2. Em **Escopos**, marque: Produtos, Pedidos de Venda, Situações (e Estoques).
3. No campo **Link de redirecionamento**, cole o "OAuth Redirect URL" que o n8n
   mostra no passo 4. Abra o passo 4 numa outra aba, copie e volte.
4. Guarde o **Client ID** e o **Client Secret**.

### 4. Criar as credenciais no n8n
**Bling** (tipo *OAuth2 API*), com nome "Bling - NOME DA LOJA":
- Grant Type: `Authorization Code`
- Authorization URL: `https://www.bling.com.br/Api/v3/oauth/authorize`
- Access Token URL: `https://www.bling.com.br/Api/v3/oauth/token`
- Client ID / Client Secret: os do passo 3
- Scope: deixe vazio
- Authentication: `Header`
- Clique em **Connect** e autorize no Bling.

**Telegram** (tipo *Telegram API*), com nome "Telegram - NOME DA LOJA": cole o token do passo 1.

**Anthropic** (tipo *Anthropic*): sua chave da API Claude. Esta pode ser a mesma para as 3 lojas.

### 5. Importar o fluxo
1. No n8n: **Create Workflow > ⋯ (canto superior direito) > Import from File**
   e escolha `agente-atendimento-telegram.json`.
2. Renomeie o fluxo para "Atendimento Telegram - NOME DA LOJA".
3. Abra cada bloco que mostrar alerta vermelho e escolha a credencial **desta loja**:
   - Telegram: "Telegram - Mensagem recebida", "Responder cliente",
     "Avisar que só lê texto", "registrar_venda", "chamar_equipe"
   - Bling: "buscar_produtos", "consultar_pedido_por_numero",
     "detalhes_do_pedido", "consultar_situacao"
   - Anthropic: "Claude"
4. Abra **"Config da Loja"** e preencha nome, descrição, site, condições
   comerciais, cupom e o Chat ID do grupo (passo 2).
5. Salve e **ative** o fluxo (botão no topo).

### 6. Testar
Mande `/start` para o bot e depois perguntas reais: preço de um produto, um
pedido (número + CPF), "quero falar com alguém".

---

## Cuidados
- **Um bot = um fluxo ativo.** Se você clicar em "Test workflow" no editor
  enquanto o fluxo está ativo, o Telegram passa a mandar as mensagens para o
  teste. Para testar sem derrubar, use um bot separado só de testes.
- **Memória:** a memória atual fica dentro do n8n e é apagada quando o n8n
  reinicia. Para guardar o histórico de vez, depois trocamos por Postgres/Supabase.
- **n8n precisa ter endereço público com HTTPS** (n8n Cloud ou servidor com domínio).
