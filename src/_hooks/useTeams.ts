/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-09 13:58:13 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 11:28:37
 * @Description: Hook for the teams (from Ivan Schlauer Backend)
 */

import { useContext, useEffect, useState } from "react"
import { TeamsContext } from "../_contexts/TeamsContext";
import { apiClient } from "../_services/api-client";
import { CanceledError } from "axios";
import { ITeam } from "../_common/models";

export const useTeams = () => {

  const [teamss, setTeamss] = useContext(TeamsContext);
  const [error, setError] = useState("");
  
  useEffect(() => {
    apiClient.get<ITeam[]>('/teams')
      .then(res => {
        localStorage.removeItem('teams');
        res.data = res.data.filter(t => t.teamID != 37);
        localStorage.setItem('teams', JSON.stringify(res.data));
        console.log(teamss)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err);
      })
  }, []);

  return error;
  
}