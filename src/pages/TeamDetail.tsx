import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewsCard from '@/components/NewsCard';
import AdBanner from '@/components/AdBanner';
import { teams } from '@/data/teams';
import { mockNews } from '@/data/news';
import { Shield, MapPin, Users, Calendar, Trophy, ArrowLeft } from 'lucide-react';

const TeamDetail = () => {
  const { teamId } = useParams();
  const team = teams.find(t => t.id === teamId);
  
  if (!team) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Time não encontrado</h1>
          <Button asChild>
            <Link to="/times">Voltar para Times</Link>
          </Button>
        </div>
      </div>
    );
  }

  const teamNews = mockNews.filter(article => article.teamId === team.id);
  const relatedNews = mockNews.filter(article => 
    article.teamId !== team.id && 
    (article.category === 'internacional' || article.category === 'brasileirao')
  ).slice(0, 3);

  const getLeagueLabel = (league: string) => {
    const labels = {
      'brasileirao-a': 'Brasileirão Série A',
      'brasileirao-b': 'Brasileirão Série B',
      'europa': 'Futebol Europeu'
    };
    return labels[league as keyof typeof labels] || league;
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="outline">
            <Link to="/times">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Times
            </Link>
          </Button>
        </div>

        {/* Team Header */}
        <Card className="mb-8" style={{ borderColor: `hsl(${team.colors.primary})` }}>
          <CardHeader 
            className="text-white"
            style={{ background: `linear-gradient(135deg, hsl(${team.colors.primary}), hsl(${team.colors.primary} / 0.8))` }}
          >
            <div className="flex items-center gap-6">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center border-4 border-white/20"
                style={{ backgroundColor: `hsl(${team.colors.secondary})` }}
              >
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl mb-2">{team.name}</CardTitle>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{team.country}</span>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/20">
                    {getLeagueLabel(team.league)}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {team.description}
            </p>
          </CardContent>
        </Card>

        {/* Top Ad */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Team Stats */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Informações do Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-bold text-foreground">Fundação</h3>
                    <p className="text-muted-foreground">Em breve</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Trophy className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-bold text-foreground">Títulos</h3>
                    <p className="text-muted-foreground">Em breve</p>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-bold text-foreground">Próximo Jogo</h3>
                    <p className="text-muted-foreground">Em breve</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team News */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-3 mb-6">
                Notícias do {team.shortName}
              </h2>
              
              {teamNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {teamNews.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">
                      Nenhuma notícia específica do {team.shortName} no momento.
                    </p>
                    <Button asChild variant="outline" className="mt-4">
                      <Link to="/noticias">Ver todas as notícias</Link>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Ad between content */}
            <div className="mb-8">
              <AdBanner size="leaderboard" />
            </div>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-3 mb-6">
                  Outras Notícias
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {relatedNews.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Ad */}
              <AdBanner size="sidebar" />
              
              {/* Team Colors */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cores do Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div 
                        className="w-12 h-12 rounded-full border border-border mx-auto mb-2"
                        style={{ backgroundColor: `hsl(${team.colors.primary})` }}
                      />
                      <span className="text-xs text-muted-foreground">Primária</span>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-12 h-12 rounded-full border border-border mx-auto mb-2"
                        style={{ backgroundColor: `hsl(${team.colors.secondary})` }}
                      />
                      <span className="text-xs text-muted-foreground">Secundária</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Estatísticas Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Notícias:</span>
                    <Badge variant="secondary">{teamNews.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Liga:</span>
                    <Badge variant="outline">{getLeagueLabel(team.league)}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">País:</span>
                    <span className="text-sm font-medium">{team.country}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Another Ad */}
              <AdBanner size="rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;