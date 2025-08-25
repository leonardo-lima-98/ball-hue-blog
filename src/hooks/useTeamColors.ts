import { useEffect, useState } from 'react';
import { teams } from '@/data/teams';

export const useTeamColors = () => {
  const [favoriteTeam, setFavoriteTeam] = useState<string | null>(null);

  useEffect(() => {
    const savedTeam = localStorage.getItem('favoriteTeam');
    if (savedTeam) {
      setFavoriteTeam(savedTeam);
    }
  }, []);

  const changeFavoriteTeam = (teamId: string) => {
    if (teamId === 'none') {
      setFavoriteTeam(null);
      localStorage.removeItem('favoriteTeam');
      
      // Reset to default colors
      const root = document.documentElement;
      root.style.setProperty('--team-primary', '142 76% 36%');
      root.style.setProperty('--team-secondary', '210 40% 96%');
      root.style.setProperty('--primary', '142 76% 36%');
      root.style.setProperty('--accent', '142 76% 36%');
    } else {
      const team = teams.find(t => t.id === teamId);
      if (team) {
        setFavoriteTeam(teamId);
        localStorage.setItem('favoriteTeam', teamId);
        
        // Apply team colors to CSS variables
        const root = document.documentElement;
        root.style.setProperty('--team-primary', team.colors.primary);
        root.style.setProperty('--team-secondary', team.colors.secondary);
        root.style.setProperty('--primary', team.colors.primary);
        root.style.setProperty('--accent', team.colors.primary);
      }
    }
  };

  useEffect(() => {
    if (favoriteTeam) {
      const team = teams.find(t => t.id === favoriteTeam);
      if (team) {
        const root = document.documentElement;
        root.style.setProperty('--team-primary', team.colors.primary);
        root.style.setProperty('--team-secondary', team.colors.secondary);
        root.style.setProperty('--primary', team.colors.primary);
        root.style.setProperty('--accent', team.colors.primary);
      }
    }
  }, [favoriteTeam]);

  return {
    favoriteTeam,
    changeFavoriteTeam,
    currentTeam: favoriteTeam ? teams.find(t => t.id === favoriteTeam) : null
  };
};