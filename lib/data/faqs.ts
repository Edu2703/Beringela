export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "A embalagem é realmente discreta?",
    answer:
      "Sim, completamente. Todas as entregas são feitas em caixas neutras, sem identificação do conteúdo ou da marca no exterior. Ninguém além de você saberá o que está dentro.",
  },
  {
    id: "2",
    question: "O que aparece no extrato do cartão de crédito?",
    answer:
      "Aparece apenas o nome da empresa responsável pelo processamento, sem qualquer referência ao produto ou à marca Berinjela. Sua privacidade é total.",
  },
  {
    id: "3",
    question: "Como funciona o desconto no PIX?",
    answer:
      "Ao finalizar a compra e escolher PIX como forma de pagamento, o desconto é aplicado automaticamente: R$ 50,00 de desconto nas opções de 1 e 3 embalagens, e R$ 100,00 de desconto na opção de 6 embalagens.",
  },
  {
    id: "4",
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo estimado é de 5 a 10 dias úteis para todo o Brasil, dependendo da sua região. Após o pagamento confirmado, você recebe o código de rastreio por e-mail.",
  },
  {
    id: "5",
    question: "Posso trocar ou devolver o produto?",
    answer:
      "Sim. Se você tiver qualquer problema com o pedido, entre em contato com nosso atendimento em até 7 dias após o recebimento. Resolvemos sem enrolação.",
  },
  {
    id: "6",
    question: "O site é seguro para comprar?",
    answer:
      "Totalmente. O site utiliza certificado SSL e o pagamento é processado por gateway certificado e seguro. Seus dados são protegidos em todas as etapas da compra.",
  },
  {
    id: "7",
    question: "Vocês entregam em todo o Brasil?",
    answer:
      "Sim, entregamos para todos os estados do Brasil via Correios e transportadoras parceiras, sempre em embalagem discreta e rastreável.",
  },
  {
    id: "8",
    question: "Posso comprar como presente sem a pessoa saber?",
    answer:
      "Perfeitamente. A embalagem neutra garante total discrição. Se quiser, pode até pedir para não incluirmos nota fiscal externa na caixa — é só avisar no campo de observações ao finalizar.",
  },
];
