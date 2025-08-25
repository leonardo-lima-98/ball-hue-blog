import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import NewsCard from '@/components/NewsCard';
import AdBanner from '@/components/AdBanner';
import { mockNews } from '@/data/news';
import { Calendar, User, ArrowLeft, Share2, Heart } from 'lucide-react';

const NewsDetail = () => {
  const { newsId } = useParams();
  const article = mockNews.find(n => n.id === newsId);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Notícia não encontrada</h1>
          <Button asChild>
            <Link to="/noticias">Voltar para Notícias</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedNews = mockNews.filter(n => 
    n.id !== article.id && 
    n.category === article.category
  ).slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      brasileirao: 'Brasileirão',
      internacional: 'Internacional',
      mercado: 'Mercado',
      times: 'Times'
    };
    return labels[category as keyof typeof labels] || category;
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="outline">
            <Link to="/noticias">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Notícias
            </Link>
          </Button>
        </div>

        {/* Top Ad */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article>
              {/* Article Header */}
              <div className="mb-6">
                <Badge className="mb-4">
                  {getCategoryLabel(article.category)}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">Por {article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="h-4 w-4 mr-2" />
                      Curtir
                    </Button>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-card"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="bg-card border border-border rounded-lg p-6 mb-8">
                  <p className="text-foreground leading-relaxed mb-4">
                    {article.content}
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    Esta é uma notícia simulada para demonstração do sistema. Em uma implementação real, 
                    o conteúdo completo seria carregado de uma base de dados ou CMS.
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    O sistema permite integração com APIs de terceiros para obter estatísticas em tempo real, 
                    resultados de jogos, e outras informações relevantes sobre futebol.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Fique sempre atualizado com as principais notícias do mundo do futebol através do nosso portal.
                  </p>
                </div>
              </div>

              {/* Ad between content */}
              <div className="my-8">
                <AdBanner size="leaderboard" />
              </div>

              {/* Article Footer */}
              <div className="border-t border-border pt-6 mt-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">#{getCategoryLabel(article.category)}</Badge>
                    {article.teamId && <Badge variant="outline">#futebol</Badge>}
                    <Badge variant="outline">#noticias</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartilhar
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            {/* Related News */}
            {relatedNews.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-3 mb-6">
                  Notícias Relacionadas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {relatedNews.map((news) => (
                    <NewsCard key={news.id} article={news} />
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
              
              {/* Article Info */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                    Sobre esta notícia
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Categoria:</span>
                      <Badge variant="outline">{getCategoryLabel(article.category)}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Autor:</span>
                      <span className="font-medium">{article.author}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Publicado:</span>
                      <span className="font-medium">
                        {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Popular News */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                    Mais Lidas
                  </h3>
                  <div className="space-y-3">
                    {mockNews.filter(n => n.featured).slice(0, 4).map((news, index) => (
                      <Link 
                        key={news.id} 
                        to={`/noticia/${news.id}`}
                        className="flex gap-3 p-2 rounded-md hover:bg-muted transition-colors"
                      >
                        <span className="text-lg font-bold text-primary min-w-[1.5rem]">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-medium text-sm text-foreground line-clamp-2 mb-1">
                            {news.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {new Date(news.publishedAt).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                      </Link>
                    ))}
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

export default NewsDetail;