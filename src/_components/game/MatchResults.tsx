/*

 Author: schoeni-mo
 Email: soemod20@htl-kaindorf.at

 Creation Date: 2024-06-09 17:38:09
 Last Modification Date: 2024-06-18 23:59:22

 

*/
import { IGamePlayer, IMatchResponse, ITeam } from "../../_common/models";
import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import { TeamContext } from "../../_contexts/TeamContext.tsx";
import { useContext, useEffect, useState } from "react";
import { apiClient } from "../../_services/api-client.ts";

export const MatchResults = () => {
    const results: IMatchResponse = localStorage.getItem("match_outcome") && JSON.parse(localStorage.getItem('match_outcome') as string) != "{}" ?
        JSON.parse(localStorage.getItem("match_outcome") as string) : null;
    const [team] = useContext(TeamContext);
    let home : boolean = false;
    const [awayPlayers, setAwayPlayers] = useState<IGamePlayer[]>([]);
    const [awayScore, setAwayScore] = useState<number>(0);
    const [homePlayers, setHomePlayers] = useState<IGamePlayer[]>([]);
    const [homeScore, setHomeScore] = useState<number>(0);
    

    
    if (results.homeTeam.teamID == team.teamID) {
        home = true;
    }

    useEffect(() => {
        apiClient.get<IGamePlayer[]>('/games/gameplayers', {params: {user: localStorage.getItem('user'), team: results.awayTeam.teamID, game: results.gameID}})
        .then(res => {
            setAwayPlayers(res.data);
            setAwayScore(awayPlayers.reduce((totalScore, player) => totalScore + player.pts, 0));
        })
        .catch(err => console.log(err));
    }, []);
    useEffect(() => {
        apiClient.get<IGamePlayer[]>('/games/gameplayers', {params: {user: localStorage.getItem('user'), team: results.homeTeam.teamID, game: results.gameID}})
        .then(res => {
            setHomePlayers(res.data);
            setHomeScore(homePlayers.reduce((totalScore, player) => totalScore + player.pts, 0));
        })
        .catch(err => console.log(err));
    }, []);
    
    


    return (
        <div>
         {homeScore > awayScore ? 
            <div>
                {home ?
                <div>
                    <Stack justify={'center'} align={'center'}>
                        <Heading size={'4xl'} mt={20}>🏆 You Won 🏆</Heading>
                        <Flex>
                            <Text size={'2xl'}>{results.awayTeam.code}</Text>
                            <Text size={'2xl'} color={'red'}>{awayScore}</Text>
                            <Text size={'2xl'} marginInline={5}>-</Text>
                            <Text size={'2xl'} color={'green'}>{homeScore}</Text>
                            <Text size={'2xl'}>{results.homeTeam.code}</Text>
                        </Flex>
                    </Stack>
                </div>
                :
                <div>
                    <Stack justify={'center'} align={'center'}>
                        <Heading size={'4xl'} mt={20}>❌ You Lost ❌</Heading>
                        <Flex>
                            <Text size={'2xl'}>{results.awayTeam.code}</Text>
                            <Text size={'2xl'} color={'red'}>{awayScore}</Text>
                            <Text size={'2xl'} marginInline={5}>-</Text>
                            <Text size={'2xl'} color={'green'}>{homeScore}</Text>
                            <Text size={'2xl'}>{results.homeTeam.code}</Text>
                        </Flex>
                    </Stack>
                </div>
                }
            </div>
          : 
          <div>
                {home ?
                <div>
                    <Stack justify={'center'} align={'center'}>
                        <Heading size={'4xl'} mt={20}>❌ You Lost ❌</Heading>
                        <Flex>
                            <Text size={'2xl'}>{results.awayTeam.code}</Text>
                            <Text size={'2xl'} color={'red'}>{awayScore}</Text>
                            <Text size={'2xl'} marginInline={5}>-</Text>
                            <Text size={'2xl'} color={'green'}>{homeScore}</Text>
                            <Text size={'2xl'}>{results.homeTeam.code}</Text>
                        </Flex>
                    </Stack>
                </div>
                :
                <div>
                    <Stack justify={'center'} align={'center'}>
                        <Heading size={'4xl'} mt={20}>🏆 You Won 🏆</Heading>
                        <Flex>
                            <Text size={'2xl'}>{results.awayTeam.code}</Text>
                            <Text size={'2xl'} color={'red'}>{awayScore}</Text>
                            <Text size={'2xl'} marginInline={5}>-</Text>
                            <Text size={'2xl'} color={'green'}>{homeScore}</Text>
                            <Text size={'2xl'}>{results.homeTeam.code}</Text>
                        </Flex>
                    </Stack>
                </div>
                }
            </div>
        }
        </div>
    );
}