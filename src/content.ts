export const church = {
  name: "Comunidade Cristã Casa de Paz",
  shortName: "Casa de Paz",
  legalName: "Comunidade Cristã Casa de Paz",
  tradeName: "Igreja Casa de Paz",
  cnpj: "67.883.088/0001-08",
  city: "Contagem",
  state: "MG",
  address: {
    street: "Rua Dom Bosco, 683",
    district: "Industrial",
    city: "Contagem",
    state: "MG",
    zip: "32235-050",
    full: "Rua Dom Bosco, 683 — Industrial, Contagem/MG, CEP 32235-050",
  },
  mapsQuery: "Rua Dom Bosco 683 Industrial Contagem MG 32235-050",
  instagram: {
    handle: "@acasadepaz",
    url: "https://www.instagram.com/acasadepaz",
  },
  youtube: {
    handle: "@acasadepaz",
    url: "https://www.youtube.com/@acasadepaz",
  },
} as const;

export const media = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Momento de adoração na Casa de Paz.",
  },
  church: {
    src: "/images/church.png",
    alt: "Celebração da Casa de Paz com a comunidade reunida.",
  },
  worship: {
    src: "/images/worship.jpg",
    alt: "Louvor ao vivo na celebração da casa.",
  },
  music: {
    src: "/images/prayer.png",
    alt: "Palavra e adoração na Casa de Paz.",
  },
  prayer: {
    src: "/images/prayer.jpg",
    alt: "Tempo de oração e comunhão.",
  },
  quemSomos: {
    src: "/images/quem-somos-placeholder.svg",
    alt: "Foto da comunidade — em breve.",
  },
  projeto: {
    src: "/images/projeto-placeholder.svg",
    alt: "Foto do projeto em movimento — em breve.",
  },
} as const;

export const pastor = {
  name: "Ramon Elias",
  displayName: "Pr. Ramon Elias",
  role: "Pastor e presidente",
} as const;

export const institute = {
  name: "Instituto Casa de Paz",
  instagram: {
    handle: "@institutocasadepazoficial",
    url: "https://www.instagram.com/institutocasadepazoficial",
  },
} as const;

export const nav = [
  { id: "igreja", label: "A igreja" },
  { id: "instituto", label: "Instituto" },
  { id: "programacao", label: "Programação" },
  { id: "ofertas", label: "Ofertas" },
  { id: "nossa-casa", label: "Nossa Casa" },
] as const;

export const pillars = [
  {
    number: "01",
    title: "Adorar a Deus",
  },
  {
    number: "02",
    title: "Amar nossas famílias",
  },
  {
    number: "03",
    title: "Servir a cidade",
  },
] as const;

export const quemSomos = {
  title: "Quem somos",
  paragraphs: [
    "A Igreja Casa de Paz nasceu para ser exatamente o que o nome diz: uma casa.",
    "Uma casa onde pessoas são recebidas como estão, encontram uma família e têm a oportunidade de conhecer Jesus de verdade.",
    "Acreditamos em uma igreja que vai além do culto de domingo. Uma igreja presente na vida das pessoas, que acolhe, ensina, cuida, serve e caminha junto.",
    "Somos uma comunidade formada por pessoas comuns, com histórias, lutas, sonhos e recomeços. Não buscamos parecer perfeitos. Buscamos seguir Jesus e nos tornar cada dia mais parecidos com Ele.",
    "Queremos que crianças cresçam conhecendo a Cristo, que famílias sejam fortalecidas, que jovens encontrem propósito e que cada pessoa descubra que existe um lugar para ela no Reino de Deus.",
    "Por isso, nossa igreja também está presente na comunidade, servindo através de projetos sociais, educação, esporte e ações que alcançam crianças, adolescentes e famílias.",
  ],
  motto: "Todo problema é uma oportunidade de tornar o nome de Jesus famoso",
} as const;

export const fronts = [
  {
    kicker: "01",
    title: "Evangelho",
  },
  {
    kicker: "02",
    title: "Educação",
  },
  {
    kicker: "03",
    title: "Empreendedorismo",
  },
  {
    kicker: "04",
    title: "Esportes",
  },
] as const;

export const offerings = {
  title: "Ofertas",
  text: "Sua oferta sustenta a missão da Casa de Paz: adoração, cuidado pastoral e serviço à cidade. Em breve o PIX oficial estará disponível neste QR Code.",
  email: "ofertas@igrejacasadepaz.com.br",
  qr: "/images/qr-ofertas.svg",
} as const;

export const ourHouse = {
  title: "Nossa Casa",
  text: "Estamos em um tempo especial: a compra do prédio onde a Casa de Paz se reúne. Aqui contaremos essa história e como você pode participar. Em breve o PIX oficial estará disponível neste QR Code.",
  email: "nossacasa@igrejacasadepaz.com.br",
  qr: "/images/qr-nossa-casa.svg",
} as const;

export type ScheduleItem = {
  when: string;
  title: string;
  note: string;
};

export const churchSchedule: ScheduleItem[] = [
  {
    when: "Domingo · 18h30",
    title: "Celebração",
    note: "Louvor, Palavra e comunhão da casa. Venha como está.",
  },
];

export const instituteSchedule: ScheduleItem[] = [
  {
    when: "Terça e quinta",
    title: "Vôlei",
    note: "Treinos e jogos no instituto.",
  },
  {
    when: "Terça e quinta",
    title: "Kickboxing",
    note: "Aulas de kickboxing para o corpo e a disciplina.",
  },
  {
    when: "Quarta",
    title: "Ballet e inglês",
    note: "Aulas de ballet e inglês no mesmo dia.",
  },
];

export const pastorTopics = [
  { value: "oracao", label: "Pedido de oração" },
  { value: "conversa", label: "Quero conversar" },
  { value: "aconselhamento", label: "Aconselhamento pastoral" },
  { value: "visita", label: "Pedido de visita" },
  { value: "igreja", label: "Conhecer a igreja" },
  { value: "instituto", label: "Instituto e projetos" },
  { value: "outro", label: "Outro assunto" },
] as const;
