import { createContext, ReactNode, useState } from "react";
import { ITeam } from "../_common/models";


/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-10 10:11:12 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 10:11:59
 * @Description: Context for the currently selected Team
 */



const teamm : ITeam = localStorage.getItem("team") ? JSON.parse(localStorage.getItem("team") as string) : {} as ITeam;

export const TeamContext = createContext<[ITeam, (team: ITeam) => void]>([teamm, () => null]);



interface Props {
  children : ReactNode
}

export const TeamContextProvider = ({children} : Props) => {

  const [team, setTeam] = useState<ITeam>(teamm);

  //* INFO : Setting the team to localStorage as well 
  const setTeamStorage = (teamStorage: ITeam) => {
    setTeam(teamStorage);
    localStorage.setItem('team', JSON.stringify(teamStorage));
  }

  return (
    <TeamContext.Provider value={[team, setTeamStorage]}>
      {children}
    </TeamContext.Provider>
  );
}