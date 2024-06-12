import { createContext, ReactNode, useState } from "react";
import { IPlayer } from "../_common/models";


const storagePlayers = localStorage.getItem('players') ? JSON.parse(localStorage.getItem('players') as string) : [];

export const PlayersContext = createContext<[IPlayer[], (players: IPlayer[]) => void]>([storagePlayers, ()=> null]);


interface Props {
  children: ReactNode
}

export const PlayersContextProvider = ({children}: Props) => {
  const [players, setPlayers] = useState<IPlayer[]>(storagePlayers);

  const setPlayersWithStorage = (players : IPlayer[]) => {
      setPlayers(players);
      localStorage.setItem('players', JSON.stringify(players));
  }

  return (
    <PlayersContext.Provider value={[players, setPlayers]}>
      {children}
    </PlayersContext.Provider>
  );
}