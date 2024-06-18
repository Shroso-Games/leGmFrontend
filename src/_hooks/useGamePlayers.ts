/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-06-12 10:17:00
 * @Last Modified by: Moritz Schöninger
 * @Description: Hook for the Games (from Ivan Schlauer Backend)
 */

import { useEffect, useState } from "react";
import { IGamePlayer, IPlayer } from "../_common/models";
import { CanceledError } from "axios";
import { apiClient } from "../_services/api-client";





export const useGamePlayers = (teamID: number, gameID: number) => {

  const [gamePlayers, setGamePlayers] = useState<IGamePlayer[]>([]);
  const [error , setError] = useState("");
  
  useEffect(() => {
    apiClient.get<IGamePlayer[]>('/games/gameplayers', {params: {game: gameID, team: teamID, user: localStorage.getItem('user')}})
      .then(res => {
        setGamePlayers(res.data)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err);
        console.log(error);
      });
  }, []);

  return gamePlayers;
}