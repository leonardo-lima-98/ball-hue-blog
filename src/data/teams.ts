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
    id: 'atletico-mg', 
    name: 'Clube Atlético Mineiro', 
    shortName: 'Atlético-MG',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 0% 0%', secondary: '0 0% 100%' },
    description: 'O Galo forte e vingador, campeão da Libertadores em 2013.'
  },
  { 
    id: 'bahia', 
    name: 'Esporte Clube Bahia', 
    shortName: 'Bahia',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '216 92% 46%', secondary: '0 84% 60%' },
    description: 'O Esquadrão de Aço, bicampeão brasileiro.'
  },
  { 
    id: 'botafogo', 
    name: 'Botafogo de Futebol e Regatas', 
    shortName: 'Botafogo',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 0% 0%', secondary: '0 0% 100%' },
    description: 'O Glorioso, com tradição e ídolos históricos do futebol.'
  },
  { 
    id: 'bragantino', 
    name: 'Red Bull Bragantino', 
    shortName: 'Bragantino',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'O Massa Bruta, projeto ousado da Red Bull no futebol brasileiro.'
  },
  { 
    id: 'ceara', 
    name: 'Ceará Sporting Club', 
    shortName: 'Ceará',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 0% 0%', secondary: '0 0% 100%' },
    description: 'O Vozão, um dos clubes mais tradicionais do Nordeste.'
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
  { 
    id: 'cruzeiro', 
    name: 'Cruzeiro Esporte Clube', 
    shortName: 'Cruzeiro',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '216 92% 46%', secondary: '0 0% 100%' },
    description: 'A Raposa, tetracampeão brasileiro e bicampeão da Libertadores.'
  },
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
    id: 'fluminense', 
    name: 'Fluminense Football Club', 
    shortName: 'Fluminense',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '347 82% 28%', secondary: '142 76% 36%' },
    description: 'O Tricolor das Laranjeiras, campeão da Libertadores de 2023.'
  },
  { 
    id: 'fortaleza', 
    name: 'Fortaleza Esporte Clube', 
    shortName: 'Fortaleza',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '216 92% 46%', secondary: '0 84% 60%' },
    description: 'O Leão do Pici, destaque recente do futebol nordestino.'
  },
  { 
    id: 'gremio', 
    name: 'Grêmio Foot-Ball Porto Alegrense', 
    shortName: 'Grêmio',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '201 92% 46%', secondary: '0 0% 0%' },
    description: 'O Imortal Tricolor, tricampeão da Libertadores.'
  },
  { 
    id: 'internacional', 
    name: 'Sport Club Internacional', 
    shortName: 'Internacional',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'O Colorado, bicampeão da Libertadores e mundial de 2006.'
  },
  { 
    id: 'juventude', 
    name: 'Esporte Clube Juventude', 
    shortName: 'Juventude',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '142 76% 36%', secondary: '0 0% 100%' },
    description: 'O Verdão da Serra, campeão da Copa do Brasil de 1999.'
  },
  { 
    id: 'mirassol', 
    name: 'Mirassol Futebol Clube', 
    shortName: 'Mirassol',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '48 92% 52%', secondary: '0 84% 60%' },
    description: 'O Leão, clube em ascensão do interior paulista.'
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
    id: 'santos', 
    name: 'Santos Futebol Clube', 
    shortName: 'Santos',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 0% 100%', secondary: '0 0% 0%' },
    description: 'A Vila Belmiro, eternizada por Pelé e grandes craques.'
  },
  { 
    id: 'sao-paulo', 
    name: 'São Paulo Futebol Clube', 
    shortName: 'São Paulo',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'O Tricolor Paulista, tricampeão mundial e da Libertadores.'
  },
  { 
    id: 'sport', 
    name: 'Sport Club do Recife', 
    shortName: 'Sport',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '48 92% 52%' },
    description: 'O Leão da Ilha, campeão brasileiro de 1987.'
  },
  { 
    id: 'vasco', 
    name: 'Club de Regatas Vasco da Gama', 
    shortName: 'Vasco',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 0% 0%', secondary: '0 0% 100%' },
    description: 'O Gigante da Colina, campeão da Libertadores em 1998.'
  },
  { 
    id: 'vitoria', 
    name: 'Esporte Clube Vitória', 
    shortName: 'Vitória',
    league: 'brasileirao-a',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 0%' },
    description: 'O Rubro-Negro baiano, destaque do futebol nordestino.'
  },

  // Brasileirão Série B
  { 
    id: 'amazonas', 
    name: 'Amazonas Futebol Clube', 
    shortName: 'Amazonas',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '48 92% 52%', secondary: '0 0% 0%' },
    description: 'O Onça-Pintada, em ascensão no futebol amazonense.'
  },
  { 
    id: 'america-mg', 
    name: 'América Futebol Clube', 
    shortName: 'América-MG',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '142 76% 36%', secondary: '0 0% 0%' },
    description: 'O Coelho, tradicional clube de Minas Gerais.'
  },
  { 
    id: 'athletic', 
    name: 'Athletic Club', 
    shortName: 'Athletic Club',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 0% 0%', secondary: '0 0% 100%' },
    description: 'O Esquadrão de São João del-Rei, em crescimento no cenário nacional.'
  },
  { 
    id: 'athletico-pr', 
    name: 'Club Athletico Paranaense', 
    shortName: 'Athletico-PR',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 0%' },
    description: 'O Furacão, campeão da Sul-Americana e da Copa do Brasil.'
  },
  { 
    id: 'atletico-go', 
    name: 'Atlético Clube Goianiense', 
    shortName: 'Atlético-GO',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 0%' },
    description: 'O Dragão, tradicional representante goiano.'
  },
  { 
    id: 'avai', 
    name: 'Avaí Futebol Clube', 
    shortName: 'Avaí',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '216 92% 46%', secondary: '0 0% 100%' },
    description: 'O Leão da Ilha, clube tradicional de Santa Catarina.'
  },
  { 
    id: 'botafogo-sp', 
    name: 'Botafogo Futebol Clube (SP)', 
    shortName: 'Botafogo-SP',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 0%' },
    description: 'O Pantera, tradicional clube de Ribeirão Preto.'
  },
  { 
    id: 'chapecoense', 
    name: 'Associação Chapecoense de Futebol', 
    shortName: 'Chapecoense',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '142 76% 36%', secondary: '0 0% 100%' },
    description: 'A Chape, marcada pela superação e pela paixão de sua torcida.'
  },
  { 
    id: 'coritiba', 
    name: 'Coritiba Foot Ball Club', 
    shortName: 'Coritiba',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '142 76% 36%', secondary: '0 0% 100%' },
    description: 'O Coxa Branca, campeão brasileiro em 1985.'
  },
  { 
    id: 'crb', 
    name: 'Clube de Regatas Brasil', 
    shortName: 'CRB',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'O Galo de Alagoas, tradicional do Nordeste.'
  },
  { 
    id: 'criciuma', 
    name: 'Criciúma Esporte Clube', 
    shortName: 'Criciúma',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '48 92% 52%', secondary: '0 0% 0%' },
    description: 'O Tigre, campeão da Copa do Brasil de 1991.'
  },
  { 
    id: 'cuiaba', 
    name: 'Cuiabá Esporte Clube', 
    shortName: 'Cuiabá',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '48 92% 52%', secondary: '142 76% 36%' },
    description: 'O Dourado, jovem clube em destaque no futebol brasileiro.'
  },
  { 
    id: 'ferroviaria', 
    name: 'Associação Ferroviária de Esportes', 
    shortName: 'Ferroviária',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 84% 28%', secondary: '0 0% 100%' },
    description: 'A Locomotiva de Araraquara, tradicional do interior paulista.'
  },
  { 
    id: 'goias', 
    name: 'Goiás Esporte Clube', 
    shortName: 'Goiás',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '142 76% 36%', secondary: '0 0% 100%' },
    description: 'O Esmeraldino, destaque do Centro-Oeste brasileiro.'
  },
  { 
    id: 'novorizontino', 
    name: 'Grêmio Novorizontino', 
    shortName: 'Novorizontino',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '48 92% 52%', secondary: '0 0% 0%' },
    description: 'O Tigre do Vale, clube em ascensão no futebol paulista.'
  },
  { 
    id: 'operario-pr', 
    name: 'Operário Ferroviário Esporte Clube', 
    shortName: 'Operário-PR',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 0% 0%', secondary: '0 0% 100%' },
    description: 'O Fantasma de Ponta Grossa, tradição no Paraná.'
  },
  { 
    id: 'paysandu', 
    name: 'Paysandu Sport Club', 
    shortName: 'Paysandu',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '216 92% 46%', secondary: '0 0% 100%' },
    description: 'O Papão da Curuzu, clube histórico do Pará.'
  },
  { 
    id: 'remo', 
    name: 'Clube do Remo', 
    shortName: 'Remo',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '216 92% 30%', secondary: '0 0% 100%' },
    description: 'O Leão Azul, rival histórico do Paysandu no Pará.'
  },
  { 
    id: 'vila-nova', 
    name: 'Vila Nova Futebol Clube', 
    shortName: 'Vila Nova',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '0 84% 60%', secondary: '0 0% 100%' },
    description: 'O Tigre, tradicional clube goiano.'
  },
  { 
    id: 'volta-redonda', 
    name: 'Volta Redonda Futebol Clube', 
    shortName: 'Volta Redonda',
    league: 'brasileirao-b',
    country: 'Brasil',
    colors: { primary: '48 92% 52%', secondary: '0 0% 0%' },
    description: 'O Voltaço, destaque do interior do Rio de Janeiro.'
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
    colors: { primary: '211, 76%, 33%', secondary: '220 90% 40%' },
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