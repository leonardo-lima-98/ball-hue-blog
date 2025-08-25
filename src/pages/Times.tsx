import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdBanner from '@/components/AdBanner';
import { teams } from '@/data/teams';
import { Shield, MapPin } from 'lucide-react';

const Times = () => {
  const brasileiraoA = teams.filter(team => team.league === 'brasileirao-a');
  const brasileiraoB = teams.filter(team => team.league === 'brasileirao-b');
  const europa = teams.filter(team => team.league === 'europa');

  const TeamCard = ({ team }: { team: any }) => (
    <Card className="group hover:shadow-card transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
            style={{ backgroundColor: `hsl(${team.colors.primary})` }}
          >
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {team.shortName}
            </CardTitle>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{team.country}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {team.description}
        </p>
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link to={`/time/${team.id}`}>
            Ver Time
          </Link>
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground border-l-4 border-primary pl-3 mb-4">
            Times
          </h1>
          <p className="text-muted-foreground">
            Acompanhe seus times favoritos do Brasil e do mundo
          </p>
        </div>

        {/* Top Ad */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Teams Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="brasileirao-a" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="brasileirao-a">Série A</TabsTrigger>
                <TabsTrigger value="brasileirao-b">Série B</TabsTrigger>
                <TabsTrigger value="europa">Europa</TabsTrigger>
              </TabsList>

              <TabsContent value="brasileirao-a">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Campeonato Brasileiro Série A
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Os principais clubes do futebol brasileiro
                  </p>
                  
                  {/* Ad between content */}
                  <div className="mb-6">
                    <AdBanner size="leaderboard" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {brasileiraoA.map((team) => (
                      <TeamCard key={team.id} team={team} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="brasileirao-b">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Campeonato Brasileiro Série B
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Times em busca do acesso à elite
                  </p>
                  
                  {/* Ad between content */}
                  <div className="mb-6">
                    <AdBanner size="leaderboard" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {brasileiraoB.map((team) => (
                      <TeamCard key={team.id} team={team} />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="europa">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Times Europeus
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Os principais clubes da Europa
                  </p>
                  
                  {/* Ad between content */}
                  <div className="mb-6">
                    <AdBanner size="leaderboard" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {europa.map((team) => (
                      <TeamCard key={team.id} team={team} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Ad */}
              <AdBanner size="sidebar" />
              
              {/* League Info */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                  Estatísticas
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Times Série A:</span>
                    <Badge variant="secondary">{brasileiraoA.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Times Série B:</span>
                    <Badge variant="secondary">{brasileiraoB.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Times Europa:</span>
                    <Badge variant="secondary">{europa.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total:</span>
                    <Badge className="bg-primary text-primary-foreground">{teams.length}</Badge>
                  </div>
                </div>
              </div>

              {/* Popular Teams */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                  Mais Populares
                </h3>
                <div className="space-y-3">
                  {teams.slice(0, 5).map((team) => (
                    <Link 
                      key={team.id} 
                      to={`/time/${team.id}`}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors"
                    >
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                        style={{ backgroundColor: `hsl(${team.colors.primary})` }}
                      >
                        <Shield className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{team.shortName}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Another Ad */}
              <AdBanner size="rectangle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Times;