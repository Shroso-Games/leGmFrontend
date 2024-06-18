import { Center, Image, Flex, Heading, Spacer, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Stack } from "@chakra-ui/react";
import { IHeadshot, IPlayer, IStats } from "../../_common/models";
import { useContext, useState } from "react";
import { TeamContext } from "../../_contexts/TeamContext";


/**========================================================================
 * *                                INFO
 *   This component is used to display certain individual Player info to 
 *   the user. The selected Player is saved in localStorage as well as the 
 *   corresponding stats.
 *
 *   Created-by: schoeni-mo
 *   Create-on: 2024-06-17 11:08:26
 *========================================================================**/


export const PlayerInfo = () => {

  const player : IPlayer = localStorage.getItem("player") && JSON.parse(localStorage.getItem('player') as string) != "{}" ?
   JSON.parse(localStorage.getItem("player") as string) : null;

  const stats : IStats = localStorage.getItem("player_stats") && JSON.parse(localStorage.getItem('player_stats') as string) != "{}" ?
   JSON.parse(localStorage.getItem("player_stats") as string) : null;
  
   let rebounds = 0;
   const [team] = useContext(TeamContext);

  const headshots: IHeadshot[] = [
      {
          "first_name": "Trae",
          "last_name": "Young",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629027.png"
      },
      {
          "first_name": "De'Andre",
          "last_name": "Hunter",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629631.png"
      },
      {
          "first_name": "Onyeka",
          "last_name": "Okongwu",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630168.png"
      },
      {
          "first_name": "Clint",
          "last_name": "Capela",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203991.png"
      },
      {
          "first_name": "Dejounte",
          "last_name": "Murray",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1627749.png"
      },
      {
          "first_name": "Bruno",
          "last_name": "Fernando",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1628981.png"
      },
      {
          "first_name": "Dylan",
          "last_name": "Windler",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629685.png"
      },
      {
          "first_name": "Garrison",
          "last_name": "Mathews",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1629726.png"
      },
      {
          "first_name": "Saddiq",
          "last_name": "Bey",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630180.png"
      },
      {
          "first_name": "Trent",
          "last_name": "Forrest",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630235.png"
      },
      {
          "first_name": "Vit",
          "last_name": "Krejci",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630249.png"
      },
      {
          "first_name": "Jalen",
          "last_name": "Johnson",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1630552.png"
      },
      {
          "first_name": "AJ",
          "last_name": "Griffin",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631100.png"
      },
      {
          "first_name": "Kobe",
          "last_name": "Bufkin",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631111.png"
      },
      {
          "first_name": "Mouhamed",
          "last_name": "Gueye",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631131.png"
      },
      {
          "first_name": "Seth",
          "last_name": "Lundy",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631150.png"
      },
      {
          "first_name": "Miles",
          "last_name": "Norris",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/1631158.png"
      },
      {
          "first_name": "Patty",
          "last_name": "Mills",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/201988.png"
      },
      {
          "first_name": "Wesley",
          "last_name": "Matthews",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/202083.png"
      },
      {
          "first_name": "Bogdan",
          "last_name": "Bogdanovic",
          "image_url": "https://cdn.nba.com/headshots/nba/latest/1040x760/203992.png"
      }
  ];
  
  
  console.log(player);
  
  
  
  
  console.log(stats);
  return (
    <div style={{paddingLeft: 60, paddingTop: 60}}>
      
      <Flex>
        <Image width={'12rem'} alt={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}  me={20} src={headshots.find(h => h.first_name == player.firstName && h.last_name == player.lastName)?.image_url}/>
        <Stack>
          <Heading pt={10} size={'3xl'}>{player.firstName +" "+player.lastName}</Heading>
          <Flex>
            <Text pt={0}>{player.birthdate}</Text>
            <Text pt={0} ps={10}>{player.college}</Text>
            <Text pt={0} ps={10}>{player.height.toString().split('')[0]+"'"+player.height.toString().split('')[1]}</Text>
            <Text pt={0} ps={10}>{player.weight}lbs</Text>
          </Flex>
        </Stack>
      </Flex>
      
      <Heading pt={20}>Season Averages</Heading>
      <TableContainer overflowY={'auto'} overflowX={'auto'} height={'10rem'} width={'40rem'} mt={1}>
          <Table variant={'striped'} textColor={'black'} bgColor={'white'}>
              <Thead bgColor={'darkgrey'} position={'sticky'} top={0}>
                <Tr>
                  <Th>PPG</Th>
                  <Th>RPG</Th>
                  <Th>APG</Th>
                  <Th>SPG</Th>
                  <Th>ORPG</Th>
                  <Th>DRPG</Th>
                  <Th>FGPCT</Th>
                </Tr>
              </Thead> 
              <Tbody>
                <Tr>
                  <Td>{stats?.pts.toFixed(2)}</Td>
                  <Td>{rebounds}</Td>
                  <Td>{stats?.ast.toFixed(2)}</Td>
                  <Td>{stats?.stl.toFixed(2)}</Td>
                  <Td>{stats?.oreb.toFixed(2)}</Td>
                  <Td>{stats?.dreb.toFixed(2)}</Td>
                  <Td>{(stats?.fgper * 100.0).toFixed(2)}</Td>
                </Tr>
              </Tbody>
          </Table>
      </TableContainer>
      <Heading>Recent games</Heading>
      <TableContainer overflowY={'auto'} overflowX={'auto'} height={'40rem'} width={'55rem'} mt={1}>
          <Table variant={'striped'} textColor={'black'} bgColor={'white'}>
              <Thead bgColor={'darkgrey'} position={'sticky'} top={0}>
                <Tr>
                  <Th>Date</Th>
                  <Th>Game</Th>
                  <Th>Minutes</Th>
                  <Th>PTS</Th>
                  <Th>AST</Th>
                  <Th>REB</Th>
                  <Th>STL</Th>
                  
                  <Th>BLK</Th>
                </Tr>
              </Thead> 
              <Tbody>

              </Tbody>
          </Table>
      </TableContainer>
    </div>
  );
}