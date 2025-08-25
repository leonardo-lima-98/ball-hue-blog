export interface Team {
  id: string;
  name: string;
  shortName: string;
  league: 'brasileirao-a' | 'brasileirao-b' | 'europa';
  country: string;
  colors: {
    primary: string;
    secondary: string;
  };
  shield?: string;
  description: string;
}

export const teams: Team[] = [
  // Brasileirão Série A
  { 
    id: 'flamengo', 
    name: 'Clube de Regatas do Flamengo', 
    shortName: 'Flamengo',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 8%' },
    description: 'O mais querido do Brasil, com a maior torcida do país.'
  },
  { 
    id: 'palmeiras', 
    name: 'Sociedade Esportiva Palmeiras', 
    shortName: 'Palmeiras',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '142 76% 36%', secondary: '0 0% 100%' },
    description: 'Atual campeão brasileiro e maior vencedor da Libertadores.'
  },
  { 
    id: 'corinthians', 
    name: 'Sport Club Corinthians Paulista', 
    shortName: 'Corinthians',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 0% 8%', secondary: '0 0% 100%' },
    description: 'O Timão, com uma das maiores torcidas do mundo.'
  },
  
  // Brasileirão Série B
  { 
    id: 'santos', 
    name: 'Santos Futebol Clube', 
    shortName: 'Santos',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 0% 8%', secondary: '0 0% 100%' },
    description: 'O Peixe, berço de Pelé e grandes craques.'
  },
  { 
    id: 'vasco', 
    name: 'Club de Regatas Vasco da Gama', 
    shortName: 'Vasco',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 0% 8%', secondary: '0 0% 100%' },
    description: 'O Gigante da Colina, tradicional clube carioca.'
  },

  // Times Europeus
  { 
    id: 'arsenal', 
    name: 'Arsenal Football Club', 
    shortName: 'Arsenal',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'Os Gunners, tradicional clube de Londres.'
  },
  { 
    id: 'aston-villa', 
    name: 'Aston Villa Football Club', 
    shortName: 'Aston Villa',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '270 50% 40%', secondary: '45 100% 50%' },
    description: 'The Villans, clube histórico de Birmingham.'
  },
  { 
    id: 'atletico-madrid', 
    name: 'Club Atlético de Madrid', 
    shortName: 'Atlético Madrid',
    league: 'europa',
    country: 'Espanha',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'Los Colchoneros, rival histórico do Real Madrid.'
  },
  { 
    id: 'barcelona', 
    name: 'Futbol Club Barcelona', 
    shortName: 'Barcelona',
    league: 'europa',
    country: 'Espanha',
    colors: { primary: '220 90% 40%', secondary: '0 84% 60%' },
    description: 'Mais que um clube, símbolo da Catalunha.'
  },
  { 
    id: 'bayer-leverkusen', 
    name: 'Bayer 04 Leverkusen', 
    shortName: 'Bayer Leverkusen',
    league: 'europa',
    country: 'Alemanha',
    colors: { primary: '0 84% 60%', secondary: '0 0% 8%' },
    description: 'Die Werkself, atual campeão alemão invicto.'
  },
  { 
    id: 'bayern-munique', 
    name: 'FC Bayern München', 
    shortName: 'Bayern de Munique',
    league: 'europa',
    country: 'Alemanha',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'Der Rekordmeister, maior clube alemão.'
  },
  { 
    id: 'borussia-dortmund', 
    name: 'Borussia Dortmund', 
    shortName: 'Borussia Dortmund',
    league: 'europa',
    country: 'Alemanha',
    colors: { primary: '45 100% 50%', secondary: '0 0% 8%' },
    description: 'Die Schwarzgelben, famoso pela Muralha Amarela.'
  },
  { 
    id: 'chelsea', 
    name: 'Chelsea Football Club', 
    shortName: 'Chelsea',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '220 90% 40%', secondary: '0 0% 100%' },
    description: 'The Blues, clube de Stamford Bridge.'
  },
  { 
    id: 'inter', 
    name: 'Football Club Internazionale Milano', 
    shortName: 'Internazionale',
    league: 'europa',
    country: 'Itália',
    colors: { primary: '220 90% 40%', secondary: '0 0% 8%' },
    description: 'I Nerazzurri, atual campeão italiano.'
  },
  { 
    id: 'juventus', 
    name: 'Juventus Football Club', 
    shortName: 'Juventus',
    league: 'europa',
    country: 'Itália',
    colors: { primary: '0 0% 8%', secondary: '0 0% 100%' },
    description: 'La Vecchia Signora, clube mais vitorioso da Itália.'
  },
  { 
    id: 'liverpool', 
    name: 'Liverpool Football Club', 
    shortName: 'Liverpool',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'The Reds, você nunca caminhará sozinho.'
  },
  { 
    id: 'manchester-city', 
    name: 'Manchester City Football Club', 
    shortName: 'Manchester City',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '195 100% 50%', secondary: '0 0% 100%' },
    description: 'The Citizens, atual tetracampeão inglês.'
  },
  { 
    id: 'manchester-united', 
    name: 'Manchester United Football Club', 
    shortName: 'Manchester United',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'The Red Devils, clube mais popular do mundo.'
  },
  { 
    id: 'milan', 
    name: 'Associazione Calcio Milan', 
    shortName: 'Milan',
    league: 'europa',
    country: 'Itália',
    colors: { primary: '0 84% 60%', secondary: '0 0% 8%' },
    description: 'I Rossoneri, segundo maior vencedor da Champions.'
  },
  { 
    id: 'napoli', 
    name: 'Società Sportiva Calcio Napoli', 
    shortName: 'Napoli',
    league: 'europa',
    country: 'Itália',
    colors: { primary: '220 90% 40%', secondary: '0 0% 100%' },
    description: 'Gli Azzurri, ídolo de Maradona e campeão italiano.'
  },
  { 
    id: 'newcastle', 
    name: 'Newcastle United Football Club', 
    shortName: 'Newcastle',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '0 0% 8%', secondary: '0 0% 100%' },
    description: 'The Magpies, tradição no futebol inglês.'
  },
  { 
    id: 'nottingham-forest', 
    name: 'Nottingham Forest Football Club', 
    shortName: 'Nottingham Forest',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'The Reds, bicampeão da Copa dos Campeões Europeus.'
  },
  { 
    id: 'psg', 
    name: 'Paris Saint-Germain Football Club', 
    shortName: 'Paris Saint-Germain',
    league: 'europa',
    country: 'França',
    colors: { primary: '220 90% 40%', secondary: '0 84% 60%' },
    description: 'Les Rouge-et-Bleu, gigante francês.'
  },
  { 
    id: 'real-madrid', 
    name: 'Real Madrid Club de Fútbol', 
    shortName: 'Real Madrid',
    league: 'europa',
    country: 'Espanha',
    colors: { primary: '0 0% 100%', secondary: '220 90% 40%' },
    description: 'Los Blancos, maior campeão da Champions League.'
  },
  { 
    id: 'tottenham', 
    name: 'Tottenham Hotspur Football Club', 
    shortName: 'Tottenham',
    league: 'europa',
    country: 'Inglaterra',
    colors: { primary: '0 0% 100%', secondary: '220 90% 40%' },
    description: 'Spurs, clube do norte de Londres.'
  }
];