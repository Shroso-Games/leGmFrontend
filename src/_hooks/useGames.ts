/*

 Author: schoeni-mo
 Email: soemod20@htl-kaindorf.at

 Creation Date: 2024-06-18 23:33:24
 Last Modification Date: 2024-06-18 23:34:35

 

*/

import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import { IGame } from "../_common/models";
import { apiClient } from "../_services/api-client";

export const useGames = (teamID: number) => {

  const [games, setGames] = useState<IGame[]>([]);
  const [error , setError] = useState("");
  
  useEffect(() => {
    apiClient.get<IGame[]>('/games', {params: {team: teamID, user: localStorage.getItem('user')}})
      .then(res => {
        setGames(res.data)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err);
        console.log(error);
      });
  }, []);

  return games;
}