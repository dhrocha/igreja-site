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
    src: "/images/church.jpg",
    alt: "Comunidade atenta à Palavra durante o culto.",
  },
  worship: {
    src: "/images/worship.jpg",
    alt: "Louvor ao vivo na celebração da casa.",
  },
  music: {
    src: "/images/music.jpg",
    alt: "Músico tocando violão no culto.",
  },
  prayer: {
    src: "/images/prayer.jpg",
    alt: "Tempo de oração e comunhão.",
  },
  band: {
    src: "/images/band.jpg",
    alt: "Ministério de louvor da Casa de Paz.",
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
  { id: "pastor", label: "Fale com o pastor" },
] as const;

export const values = [
  {
    title: "Palavra",
    text: "A Escritura no centro: ensinamos, celebramos e decidimos a partir do evangelho de Jesus.",
  },
  {
    title: "Casa",
    text: "Hospitalidade de verdade. Aqui há mesa, nome e tempo para quem chega — e para quem permanece.",
  },
  {
    title: "Paz",
    text: "Não é slogan. É o fruto de uma vida reconciliada com Deus, uns com os outros e com o território.",
  },
  {
    title: "Serviço",
    text: "Fé que desce à rua. A igreja e o instituto caminham juntos para cuidar de pessoas reais.",
  },
] as const;

export const fronts = [
  {
    kicker: "01",
    title: "Acolhimento",
    text: "Escuta, oração e encaminhamento. Um primeiro chão para quem precisa de cuidado, orientação ou simplesmente ser recebido.",
  },
  {
    kicker: "02",
    title: "Infância e juventude",
    text: "Projetos para a prática de esportes e aprendizado - Volei, Kickboxing, Ballet e Inglês.",
  },
  {
    kicker: "03",
    title: "Igreja de segunda",
    text: "Ações sociais e atendimento humanizado aos necessitados.",
  },
  {
    kicker: "04",
    title: "Celebração",
    text: "Louvor a Deus e palavra viva. Venha louvar conosco aos domingos",
  },
] as const;

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
