import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";


type Team = {
  id: string;
  name: string;
  shortName: string;
  league: "brasileirao-a" | "brasileirao-b" | "europa";
  // logo: string; // URL da logo futuramente
};

interface Props {
  teams: Team[];
  favoriteTeam: string | null;
  children?: ReactNode;
  changeFavoriteTeam: (teamId: string) => void;
}

export default function TeamSelector({
  teams,
  favoriteTeam,
  children,
  changeFavoriteTeam,
}: Props) {
  const [open, setOpen] = useState(false);

  const leagues = ["brasileirao-a" , "brasileirao-b" , "europa"] as const;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {favoriteTeam
            ? teams.find((t) => t.id === favoriteTeam)?.shortName
            : "Escolha seu time"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[400px] p-4">
        <Tabs defaultValue="europa">
          <TabsList className="grid grid-cols-3 w-full mb-4">
            {leagues.map((league) => (
              <TabsTrigger key={league} value={league}>
                {league}
              </TabsTrigger>
            ))}
          </TabsList>

          {leagues.map((league) => (
            <TabsContent key={league} value={league}>
              <div className="grid grid-cols-4 gap-4">
                {teams
                  .filter((t) => t.league === league)
                  .map((team) => (
                    <button
                      key={team.id}
                      className={`flex flex-col items-center justify-center p-2 rounded-lg border hover:bg-accent ${
                        favoriteTeam === team.id ? "border-primary" : ""
                      }`}
                      onClick={() => {
                        changeFavoriteTeam(team.id);
                        setOpen(false);
                      }}
                    >
                      {/* <img
                        src={team.logo}
                        alt={team.shortName}
                        className="w-8 h-8 mb-1"
                      /> */}
                      <span className="text-sm">{team.shortName}</span>
                    </button>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </PopoverContent>
    </Popover>
  );
}
