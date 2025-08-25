import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import NewsCard from '@/components/NewsCard';
import AdBanner from '@/components/AdBanner';
import { mockNews } from '@/data/news';
import { Filter } from 'lucide-react';

const Noticias = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'Todas' },
    { value: 'brasileirao', label: 'Brasileirão' },
    { value: 'internacional', label: 'Internacional' },
    { value: 'mercado', label: 'Mercado' },
    { value: 'times', label: 'Times' }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? mockNews 
    : mockNews.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground border-l-4 border-primary pl-3 mb-4">
            Notícias
          </h1>
          <p className="text-muted-foreground">
            Fique por dentro das últimas novidades do futebol brasileiro e internacional
          </p>
        </div>

        {/* Top Ad */}
        <div className="flex justify-center mb-8">
          <AdBanner size="leaderboard" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium text-foreground">Filtrar por:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <div className="ml-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-muted-foreground">
                  {filteredNews.length} notícia{filteredNews.length !== 1 ? 's' : ''} encontrada{filteredNews.length !== 1 ? 's' : ''}
                </p>
                {selectedCategory !== 'all' && (
                  <Badge variant="outline">
                    {categories.find(c => c.value === selectedCategory)?.label}
                  </Badge>
                )}
              </div>
              
              {/* Ad between content */}
              <div className="mb-6">
                <AdBanner size="leaderboard" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredNews.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Carregar mais notícias
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Ad */}
              <AdBanner size="sidebar" />
              
              {/* Categories */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                  Categorias
                </h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => {
                    const count = mockNews.filter(article => article.category === category.value).length;
                    return (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className="w-full flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors text-left"
                      >
                        <span className="text-sm font-medium">{category.label}</span>
                        <Badge variant="secondary" className="text-xs">
                          {count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Popular News */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                  Mais Lidas
                </h3>
                <div className="space-y-3">
                  {mockNews.filter(article => article.featured).slice(0, 4).map((article, index) => (
                    <div key={article.id} className="flex gap-3 pb-3 border-b border-border last:border-b-0">
                      <span className="text-lg font-bold text-primary min-w-[1.5rem]">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="font-medium text-sm text-foreground line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
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

export default Noticias;