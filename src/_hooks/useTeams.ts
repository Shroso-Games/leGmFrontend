/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-09 13:58:13 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 11:28:37
 * @Description: Hook for the teams (from Ivan Schlauer Backend)
 */

import { useContext, useEffect, useState } from "react"
import { IResponseTeams, ITeam } from "../_common/models";
import { TeamsContext } from "../_contexts/TeamsContext";
import { apiClient } from "../_services/api-client";
import { CanceledError } from "axios";

export const useTeams = () => {

  /**==============================================
   * !                  WARNING
   *   
   *   Es kommt hier später etwas komplett anderes
   *   sobald das Backend fertig ist
   *
   *=============================================**/

  const [teamss, setTeamss] = useContext(TeamsContext);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const controller = new AbortController();
    apiClient.get<IResponseTeams>("/teams", { signal: controller.signal})
      .then(res => {
        let teams = res.data.response.filter(t => t.id < 31);
        setTeamss(teams);
      })
      .catch(err => {
        if(err instanceof CanceledError) return;
        setError(err);
      })
    return() => controller.abort();
  }, []);

  return {teamss, error};
  
}