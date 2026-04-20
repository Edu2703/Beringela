export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  verified: boolean;
  daysAgo: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mariana S.",
    initials: "MS",
    rating: 5,
    text: "Comprei com receio, mas a entrega foi absurdamente discreta. E o resultado veio mais rápido do que eu esperava. Já estou na segunda compra.",
    verified: true,
    daysAgo: 5,
  },
  {
    id: "2",
    name: "Rafael T.",
    initials: "RT",
    rating: 5,
    text: "Fui indicado por um amigo e de cara percebi a diferença na disposição. Senti mais energia já na primeira semana. Vale muito o investimento.",
    verified: true,
    daysAgo: 12,
  },
  {
    id: "3",
    name: "Camila P.",
    initials: "CP",
    rating: 5,
    text: "A embalagem chegou neutra, sem nenhuma informação comprometedora. Perfeito pra quem preza pela privacidade. Produto excelente.",
    verified: true,
    daysAgo: 18,
  },
  {
    id: "4",
    name: "Lucas M.",
    initials: "LM",
    rating: 5,
    text: "Estava cético no começo, mas os resultados falam por si. Minha parceira também percebeu a mudança. Recomendo de olhos fechados.",
    verified: true,
    daysAgo: 23,
  },
  {
    id: "5",
    name: "Fernanda O.",
    initials: "FO",
    rating: 5,
    text: "Comprei pra presentear meu marido e ele amou. Chegou numa caixa discreta, o site é seguro e o atendimento foi ótimo. Voltarei com certeza.",
    verified: true,
    daysAgo: 31,
  },
  {
    id: "6",
    name: "André B.",
    initials: "AB",
    rating: 5,
    text: "Após dois meses usando, posso dizer: valeu cada centavo. Disposição no dia a dia e resultados que eu não esperava tão rápido.",
    verified: true,
    daysAgo: 45,
  },
];
