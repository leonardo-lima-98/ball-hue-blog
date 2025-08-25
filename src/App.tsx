import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Noticias from "./pages/Noticias";
import Times from "./pages/Times";
import TeamDetail from "./pages/TeamDetail";
import NewsDetail from "./pages/NewsDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/times" element={<Times />} />
              <Route path="/time/:teamId" element={<TeamDetail />} />
              <Route path="/noticia/:newsId" element={<NewsDetail />} />
              <Route path="/classificacao" element={<div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Classificação em breve</h1></div>} />
              <Route path="/contato" element={<div className="container mx-auto px-4 py-8"><h1 className="text-3xl font-bold">Contato em breve</h1></div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
