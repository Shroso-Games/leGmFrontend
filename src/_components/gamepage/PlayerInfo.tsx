import { Center, Image, Flex, Heading, Spacer, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, Stack } from "@chakra-ui/react";
import { IPlayer, IStats } from "../../_common/models";
import { apiClient } from "../../_services/api-client";
import { useContext, useState } from "react";
import { TeamContext } from "../../_contexts/TeamContext";


export const PlayerInfo = () => {

  const player : IPlayer = localStorage.getItem("player") && JSON.parse(localStorage.getItem('player') as string) != "{}" ?
   JSON.parse(localStorage.getItem("player") as string) : null;

  
   const [stats, setStats] = useState<IStats>();
   let rebounds = 0;
   const [team] = useContext(TeamContext);

  
  console.log(player);
   const getPlayerStats = () => {
      apiClient.get<IStats>('/players/stats?user='+localStorage.getItem('user')+'&player='+player.playerID)
        .then(res => {
          setStats(res.data);
          rebounds = res.data.dreb + res.data.oreb;
        })
        .catch(err => {
          console.log(err);
        });
    }
  
  
  
  getPlayerStats();
  console.log(stats);
  return (
    <div style={{paddingLeft: 60, paddingTop: 60}}>
      
      <Flex>
        <Image boxSize={40} alt={player.lastName + ".png"}  me={20} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
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
                  <Th>FGPCT</Th>
                </Tr>
              </Thead> 
              <Tbody>
                <Tr>
                  <Td>{stats?.pts}</Td>
                  <Td>{rebounds}</Td>
                  <Td>{stats?.ast}</Td>
                  <Td>{stats?.stl}</Td>
                  <Td>{stats?.fgper}</Td>
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