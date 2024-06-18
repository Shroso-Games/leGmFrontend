import { Center, Flex, Heading, Image, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { usePlayers } from "../../_hooks/usePlayers";
import { IPlayer } from "../../_common/models";
import { useNavigate } from "react-router-dom";


export const Roster = () => {
  const [team] = useContext(TeamContext);

  const players: IPlayer[] = usePlayers(team.teamID);
  const navigate = useNavigate();

  
  const getPlayerInfo = (player: IPlayer) => {
    localStorage.setItem('player', JSON.stringify(player));
    navigate('/playerinfo');
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