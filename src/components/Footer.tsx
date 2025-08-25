import { Link } from 'react-router-dom';
import { Trophy, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-primary font-bold text-xl mb-4">
              <Trophy className="h-8 w-8" />
              <span>FutebolHoje</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Sua fonte confiável para as últimas notícias do futebol brasileiro e internacional. 
              Acompanhe seus times favoritos e fique por dentro de tudo que acontece no mundo da bola.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/times" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Times
                </Link>
              </li>
              <li>
                <Link to="/classificacao" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Classificação
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/noticias?categoria=brasileirao" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Brasileirão
                </Link>
              </li>
              <li>
                <Link to="/noticias?categoria=internacional" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Internacional
                </Link>
              </li>
              <li>
                <Link to="/noticias?categoria=mercado" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Mercado da Bola
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 FutebolHoje. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;