import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Menu, X, Trophy } from 'lucide-react';
import { useTeamColors } from '@/hooks/useTeamColors';
import { teams } from '@/data/teams';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { favoriteTeam, changeFavoriteTeam } = useTeamColors();

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Notícias', path: '/noticias' },
    { label: 'Times', path: '/times' },
    { label: 'Classificação', path: '/classificacao' },
    { label: 'Contato', path: '/contato' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl">
            <Trophy className="h-8 w-8" />
            <span>FutebolHoje</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActivePath(item.path) 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Team Selector */}
          <div className="hidden md:flex items-center gap-4">
            <Select value={favoriteTeam || 'none'} onValueChange={changeFavoriteTeam}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Escolha seu time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Sem time</SelectItem>
                {teams.map((team) => (
                  <SelectItem key={team.id} value={team.id}>
                    {team.shortName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActivePath(item.path) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Team Selector */}
              <div className="pt-2">
                <Select value={favoriteTeam || 'none'} onValueChange={changeFavoriteTeam}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Escolha seu time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Sem time</SelectItem>
                    {teams.map((team) => (
                      <SelectItem key={team.id} value={team.id}>
                        {team.shortName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;