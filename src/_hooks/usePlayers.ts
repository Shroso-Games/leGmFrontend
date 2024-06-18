/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-06-12 10:17:00
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 11:28:37
 * @Description: Hook for the players (from Ivan Schlauer Backend)
 */

import { useContext, useEffect, useState } from "react"
import { apiClient } from "../_services/api-client";
import { CanceledError } from "axios";
import { IPlayer } from "../_common/models";
import { PlayersContext } from "../_contexts/PlayersContext";




export const usePlayers = (teamID: number) => {

  const [players, setPlayers] = useContext(PlayersContext);
  const [, setError] = useState("");
  
  useEffect(() => {
    apiClient.get<IPlayer[]>('/players?user='+localStorage.getItem('user'), {params: {team: teamID}})
      .then(res => {
        res.data = res.data.filter(p => p.height != 0);
        localStorage.removeItem('players');
        setPlayers(res.data)
        console.log(players)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err);
      })
  }, []);

  return players;
  
}