import { createContext, ReactNode, useState } from "react";
import { ITeam } from "../_common/models";


const teams: ITeam[] = localStorage.getItem('teams') ? JSON.parse(localStorage.getItem('teams') as string) : [];

export const TeamsContext = createContext<[ITeam[], (teams: ITeam[]) => void]>([teams, () => null]);


interface Props {
  children : ReactNode
}


export const TeamsContextProvider = ({children} : Props) => {

  const [teamss, setTeamss] = useState<ITeam[]>(teams);

  const setTeamsStorage = (teamsStorage : ITeam[]) => {
    localStorage.setItem('teams', JSON.stringify(teamsStorage));
    setTeamss(teamsStorage);
  }

  return (
    <TeamsContext.Provider value={[teamss, setTeamsStorage]}>
      {children}
    </TeamsContext.Provider>
  );
}