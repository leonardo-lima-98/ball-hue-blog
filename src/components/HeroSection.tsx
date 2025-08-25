import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NewsArticle } from '@/data/news';
import { Calendar, User, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  featuredArticles: NewsArticle[];
}

const HeroSection = ({ featuredArticles }: HeroSectionProps) => {
  const mainArticle = featuredArticles[0];
  const sideArticles = featuredArticles.slice(1, 4);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
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

  if (!mainArticle) return null;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Artigo Principal */}
          <div className="lg:col-span-2">
            <Card className="group cursor-pointer hover:shadow-elevated transition-all duration-300 overflow-hidden h-full">
              <div className="relative">
                <img 
                  src={mainArticle.image} 
                  alt={mainArticle.title}
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {getCategoryLabel(mainArticle.category)}
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Link to={`/noticia/${mainArticle.id}`}>
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary-foreground transition-colors">
                      {mainArticle.title}
                    </h1>
                  </Link>
                  <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-2">
                    {mainArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{mainArticle.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(mainArticle.publishedAt)}</span>
                      </div>
                    </div>
                    <Button asChild className="bg-white text-foreground hover:bg-white/90">
                      <Link to={`/noticia/${mainArticle.id}`}>
                        Leia mais
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Artigos Laterais */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground border-l-4 border-primary pl-3">
              Mais Notícias
            </h2>
            {sideArticles.map((article) => (
              <Card key={article.id} className="group cursor-pointer hover:shadow-card transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 min-w-0">
                      <Badge variant="outline" className="text-xs mb-2">
                        {getCategoryLabel(article.category)}
                      </Badge>
                      <Link to={`/noticia/${article.id}`}>
                        <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {article.title}
                        </h3>
                      </Link>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;