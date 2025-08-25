import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import NewsCard from '@/components/NewsCard';
import AdBanner from '@/components/AdBanner';
import { mockNews } from '@/data/news';
import { useTeamColors } from '@/hooks/useTeamColors';

const Index = () => {
  const { favoriteTeam } = useTeamColors();
  const featuredNews = mockNews.filter(article => article.featured);
  const latestNews = mockNews.filter(article => !article.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Ad Banner */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center">
          <AdBanner size="leaderboard" />
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection featuredArticles={featuredNews} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* News Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-3 mb-6">
                Últimas Notícias
              </h2>
              
              {/* Ad between content */}
              <div className="mb-6">
                <AdBanner size="leaderboard" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestNews.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Sidebar Ad */}
              <AdBanner size="sidebar" />
              
              {/* Popular News */}
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-4 border-l-4 border-primary pl-3">
                  Mais Populares
                </h3>
                <div className="space-y-3">
                  {featuredNews.slice(0, 3).map((article, index) => (
                    <div key={article.id} className="flex gap-3 pb-3 border-b border-border last:border-b-0">
                      <span className="text-2xl font-bold text-primary min-w-[2rem]">
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

export default Index;
