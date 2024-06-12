import { Flex, Heading, Image, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { usePlayers } from "../../_hooks/usePlayers";
import { IPlayer } from "../../_common/models";


export const Roster = () => {
  const [team] = useContext(TeamContext);

  const players: IPlayer[] = usePlayers(team.teamID);

  return (
    <div>
      <Flex pt={5} align={'center'}justify={'center'} color={'white'}>
          <Image pe={5} height={20} src={team.logo} alt={team.name} />
          <Heading textAlign={'center'} size={'3xl'}>{team.name}'s Roster</Heading>
      </Flex>
      <TableContainer marginInline={10} overflowY={'auto'} overflowX={'auto'} height={'40rem'} mt={10}>
          <Table variant={'striped'} textColor={'black'} bgColor={'white'}>
              <Thead bgColor={'darkgrey'} position={'sticky'} top={0}>
                <Tr>
                  <Th>Name</Th>
                  <Th textAlign={'center'}>Position</Th>
                  <Th textAlign={'center'}>Birthday</Th>
                  <Th textAlign={'center'}>Height</Th>
                  <Th textAlign={'center'}>Weight</Th>
                  <Th textAlign={'center'}>Offensive Rating</Th>
                  <Th textAlign={'center'}>Defensive Rating</Th>
                  <Th textAlign={'center'}>Physical Rating</Th>
                </Tr>
              </Thead> 
              <Tbody>
                {players.map(p => (
                  <Tr>
                    <Td>{p.firstName.split('')[0] + ". " +p.lastName}</Td>
                    <Td textAlign={'center'}>{p.position}</Td>
                    <Td textAlign={'center'}>{p.birthdate}</Td>
                    <Td textAlign={'center'}>{p.height.toString().split('')[0]+"'"+p.height.toString().split('')[1]}</Td>
                    <Td textAlign={'center'}>{p.weight}</Td>
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