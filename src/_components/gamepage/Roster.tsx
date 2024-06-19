/*

 Author: schoeni-mo
 Email: soemod20@htl-kaindorf.at

 Creation Date: 2024-06-11 17:12:49
 Last Modification Date: 2024-06-18 19:46:29

 This component is used to display a Team's assigned player roster.
*/

import { Center, Flex, Heading, Image, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { usePlayers } from "../../_hooks/usePlayers";
import { IPlayer, IStats } from "../../_common/models";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../_services/api-client";





export const Roster = () => {
  const [team] = useContext(TeamContext);

  const players: IPlayer[] = usePlayers(team.teamID);
  const navigate = useNavigate();

  const getPlayerStats = (player: IPlayer) => {
    apiClient.get<IStats>('/players/stats?user='+localStorage.getItem('user')+'&player='+player.playerID)
      .then(res => {
        localStorage.setItem('player_stats', JSON.stringify(res.data));
        navigate('/playerinfo');
      })
      .catch(err => {
        console.log(err);
        localStorage.removeItem('player_stats');
        navigate('/playerinfo');
      });
  }

  
  const getPlayerInfo = (player: IPlayer) => {
    localStorage.setItem('player', JSON.stringify(player));
    getPlayerStats(player);
  }

  return (
    <div>
      <Flex pt={5} align={'center'}justify={'center'} color={'white'}>
          <Image pe={5} height={20} src={team.logo} alt={team.name} />
          <Heading textAlign={'center'} size={'3xl'}>{team.name} Roster</Heading>
      </Flex>
      <TableContainer marginInline={10} overflowY={'auto'} overflowX={'auto'} height={'40rem'} mt={10}>
          <Table variant={'simple'} textColor={'black'} bgColor={'white'}>
              <Thead bgColor={'black'} position={'sticky'}  top={0}>
                <Tr >
                  <Th color={'white'}>Name</Th>
                  <Th color={'white'} textAlign={'center'}>Position</Th>
                  <Th color={'white'} textAlign={'center'}>Birthday</Th>
                  <Th color={'white'} textAlign={'center'}>Height</Th>
                  <Th color={'white'} textAlign={'center'}>Weight</Th>
                  <Th color={'white'} textAlign={'center'}>Offensive Rating</Th>
                  <Th color={'white'} textAlign={'center'}>Defensive Rating</Th>
                  <Th color={'white'} textAlign={'center'}>Physical Rating</Th>
                </Tr>
              </Thead> 
              <Tbody>
                {players.map(p => (
                  <Tr _hover={{backgroundColor: 'grey', color: 'white', cursor: 'pointer'}} onClick={() => getPlayerInfo(p)}>
                    <Td _hover={{cursor: 'pointer', textDecoration: 'underline'}}><a onClick={() => getPlayerInfo(p)}>{p.firstName.split('')[0] + ". " +p.lastName}</a></Td>
                    <Td textAlign={'center'}>{p.position}</Td>
                    <Td textAlign={'center'}>{p.birthdate}</Td>
                    <Td textAlign={'center'}>{p.height.toString().split('')[0]+"'"+p.height.toString().split('')[1]}</Td>
                    <Td textAlign={'center'}>{p.weight}lbs</Td>
                    <Td textAlign={'center'}>{Math.round((p.threePointer+p.midRange+p.handles+p.post+p.offIQ+p.finishing+p.passing)/6)}</Td>
                    <Td textAlign={'center'}>{Math.round((p.rebounding+p.intangibles+p.defIQ)/3)}</Td>
                    <Td textAlign={'center'}>{Math.round((p.speed+p.stamina)/2)}</Td>
                  </Tr>
                ))}
              </Tbody>
          </Table>
      </TableContainer>
    </div>
  );
}