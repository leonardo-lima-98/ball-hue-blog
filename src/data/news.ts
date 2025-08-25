export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'brasileirao' | 'internacional' | 'mercado' | 'times';
  teamId?: string;
  author: string;
  publishedAt: string;
  featured: boolean;
}

export const mockNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Flamengo anuncia contratação de novo técnico para 2024',
    excerpt: 'Clube carioca confirma chegada do treinador argentino para comandar a equipe na próxima temporada.',
    content: 'O Flamengo oficializou nesta terça-feira a contratação do novo técnico para a temporada 2024. O anúncio foi feito através das redes sociais do clube...',
    image: '/api/placeholder/600/400',
    category: 'brasileirao',
    teamId: 'flamengo',
    author: 'João Silva',
    publishedAt: '2024-01-15T10:30:00Z',
    featured: true
  },
  {
    id: '2',
    title: 'Real Madrid vence El Clásico e assume liderança de La Liga',
    excerpt: 'Merengues derrotam o Barcelona por 3x1 no Santiago Bernabéu em partida emocionante.',
    content: 'Em um dos clássicos mais aguardados da temporada, o Real Madrid superou o Barcelona por 3x1...',
    image: '/api/placeholder/600/400',
    category: 'internacional',
    teamId: 'real-madrid',
    author: 'Maria Santos',
    publishedAt: '2024-01-14T22:45:00Z',
    featured: true
  },
  {
    id: '3',
    title: 'Manchester City interessado em jovem promessa brasileira',
    excerpt: 'Clube inglês monitora atacante de 19 anos que vem se destacando no Brasileirão.',
    content: 'O Manchester City demonstrou interesse oficial em contratar o jovem atacante brasileiro...',
    image: '/api/placeholder/600/400',
    category: 'mercado',
    teamId: 'manchester-city',
    author: 'Carlos Oliveira',
    publishedAt: '2024-01-14T15:20:00Z',
    featured: true
  },
  {
    id: '4',
    title: 'Palmeiras renova contrato com zagueiro titular',
    excerpt: 'Verdão anuncia extensão de contrato até 2027 com peça fundamental da defesa.',
    content: 'O Palmeiras anunciou a renovação contratual com seu zagueiro titular até dezembro de 2027...',
    image: '/api/placeholder/600/400',
    category: 'brasileirao',
    teamId: 'palmeiras',
    author: 'Ana Costa',
    publishedAt: '2024-01-13T14:15:00Z',
    featured: true
  },
  {
    id: '5',
    title: 'Bayern de Munique confirma chegada de meio-campista francês',
    excerpt: 'Gigante alemão oficializa contratação por 80 milhões de euros.',
    content: 'O Bayern de Munique confirmou oficialmente a contratação do meio-campista francês...',
    image: '/api/placeholder/600/400',
    category: 'internacional',
    teamId: 'bayern-munique',
    author: 'Pedro Almeida',
    publishedAt: '2024-01-13T11:30:00Z',
    featured: true
  },
  {
    id: '6',
    title: 'Corinthians busca reforços para a temporada 2024',
    excerpt: 'Timão negocia com três jogadores para fortalecer o elenco.',
    content: 'O Corinthians está em negociações avançadas para a contratação de três reforços...',
    image: '/api/placeholder/600/400',
    category: 'mercado',
    teamId: 'corinthians',
    author: 'Luís Fernando',
    publishedAt: '2024-01-12T16:45:00Z',
    featured: false
  },
  {
    id: '7',
    title: 'Liverpool vence Arsenal em Anfield pela Premier League',
    excerpt: 'Reds conquistam vitória importante por 2x0 em casa.',
    content: 'O Liverpool derrotou o Arsenal por 2x0 em Anfield, em partida válida pela Premier League...',
    image: '/api/placeholder/600/400',
    category: 'internacional',
    teamId: 'liverpool',
    author: 'Ricardo Gomes',
    publishedAt: '2024-01-12T20:00:00Z',
    featured: false
  },
  {
    id: '8',
    title: 'Santos confirma retorno à Série A do Brasileirão',
    excerpt: 'Peixe garantiu o acesso matemático após vitória na última rodada.',
    content: 'O Santos confirmou oficialmente o retorno à primeira divisão do Campeonato Brasileiro...',
    image: '/api/placeholder/600/400',
    category: 'brasileirao',
    teamId: 'santos',
    author: 'Fernanda Lima',
    publishedAt: '2024-01-11T18:30:00Z',
    featured: false
  }
];