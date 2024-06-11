


/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-10 11:09:38 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 11:35:37
 * @Description: Dashboard Component for the main screen of the game
 */

import { Flex, Heading, Table, TableContainer, Tbody, Th, Thead, Tr, Text } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { IStanding, IResponseStandings, StandingTeams, ITeam } from "../../_common/models";
import { apiClient } from "../../_services/api-client";
import { TeamContext } from "../../_contexts/TeamContext";
import { useTeams } from "../../_hooks/useTeams";

export const Dashboard = () => {


  /**========================================================================
   * !                              WARNING
   *   This component is not finished and the current code includes test
   *   data and unimportant stuff.  
   *
   *========================================================================**/

  const [standings, setStandings] = useState<IStanding[]>([]);  
  const [team] = useContext(TeamContext);
  const {teamss, error} = useTeams();


  apiClient.get<IResponseStandings>("/standings", {params: {league: 'standard', season: '2023'}})
      .then((response) => {
        setStandings(response.data.response);
  });


  const filteredTeams = teamss.filter(t => t.id < 16);

  const standingsTeams : StandingTeams[] = filteredTeams.map((team) => {
    return {
      name: team.name,
      win: standings.find((standing) => standing.team.name === team.name)?.win.total || 0,
       loss: standings.find((standing) => standing.team.name === team.name)?.loss.total || 0
      }
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <Flex>
        <div>
          <Heading>Conf. Standings</Heading>
          <TableContainer mt={5} width={'20rem'}>
                <Table bgColor={'white'} variant={'simple'} textColor={'whiteAlpha'}  color={'white'}>
                  <Thead bgColor={'darkGrey'}>
                    <Tr>
                      <Th>Team</Th>
                      <Th isNumeric>Win</Th>
                      <Th isNumeric>Loss</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {standingsTeams.map((t) => {
                        return (
                          <Tr bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}>
                            <Th>{t.name}</Th>
                            <Th isNumeric>{t.win}</Th>
                            <Th isNumeric>{t.loss}</Th>
                          </Tr>
                        )
                      })}
                  </Tbody>  
                </Table>
              </TableContainer>
        </div>
      </Flex>
    </>
  );
}