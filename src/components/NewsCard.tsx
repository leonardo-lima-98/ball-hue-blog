import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NewsArticle } from '@/data/news';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const NewsCard = ({ article, featured = false }: NewsCardProps) => {
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

  if (featured) {
    return (
      <Card className="group cursor-pointer hover:shadow-elevated transition-all duration-300 overflow-hidden">
        <div className="relative">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {getCategoryLabel(article.category)}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <Link to={`/noticia/${article.id}`}>
            <h2 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
              {article.title}
            </h2>
          </Link>
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to={`/noticia/${article.id}`}>
                Leia mais
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="group cursor-pointer hover:shadow-card transition-all duration-300 h-full">
      <div className="relative">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs">
            {getCategoryLabel(article.category)}
          </Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <Link to={`/noticia/${article.id}`}>
          <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
            {article.title}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{article.author}</span>
            <span>•</span>
            <span>{formatDate(article.publishedAt)}</span>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to={`/noticia/${article.id}`}>
              Ler
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;