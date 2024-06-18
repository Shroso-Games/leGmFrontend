/*

 Author: schoeni-mo
 Email: soemod20@htl-kaindorf.at

 Creation Date: 2024-06-09 15:27:15
 Last Modification Date: 2024-06-18 19:48:25

 
 This component is not finished yet, waiting for Ivan implement my python backend into Java Spring 
 backend
*/

import {
    Button,
    Center,
    Flex,
    Heading,
    Image, position, Spinner,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {useContext, useState} from "react";
import {TeamContext} from "../../_contexts/TeamContext";
import {pythonClient} from "../../_services/api-client";
import {IMatch, IMatchPlayer, IMatchResponse, ITeam} from "../../_common/models";
import {useNavigate} from "react-router-dom";
import { TeamsContext } from "../../_contexts/TeamsContext";
import { PlayersContext } from "../../_contexts/PlayersContext";
import { usePlayers } from "../../_hooks/usePlayers";

export const PlayGame = () => {
    const [team] = useContext(TeamContext);
    const [teamss] = useContext(TeamsContext);
    const [players] = useContext(PlayersContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [, setOutcome] = useState<IMatchResponse>({} as IMatchResponse);
    const navigate = useNavigate();


    const enemy: ITeam = teamss.find(t => t.teamID == 1) ?? {} as ITeam;

    const playerOfTeam : IMatchPlayer[] = usePlayers(enemy.teamID).map(p => ({
      name: p.firstName + " " +p.lastName,
      offRating: 50,
      defRating: 50,
      position: p.position
    }));

    const myPlayers : IMatchPlayer[] = usePlayers(team.teamID).map(p => ({
      name: p.firstName + " " + p.lastName,
      offRating: 50,
      defRating: 50,
      position: p.position
    }));


    const simulate = () => {

        const match : IMatch = {
          "home_team": {
            "abbr": enemy.name.split(' ').length > 2 ? enemy.name.split(' ')[2] : enemy.name.split(' ')[1],
            "name": enemy.name,
            "wins": 0,
            "losses": 0,
            "players": playerOfTeam
          },
          "away_team": {
            "abbr": team.name.split(' ').length > 2 ? team.name.split(' ')[2] : team.name.split(' ')[1],
            "name": team.name,
            "wins": 0,
            "losses": 0,
            "players": myPlayers
          },
          "my_team": 0
        }

        let result: IMatchResponse = {} as IMatchResponse;
        pythonClient.post('/predict', match)
            .then(res => {
                setLoading(false);
                result = res.data;
                localStorage.setItem('game_outcome', JSON.stringify(result));
                navigate('/match_outcome');
            })
            .catch(err => {
                console.log(err);
            });
        setOutcome(result);
        setLoading(true);
    }

    return (
        <div>
            {loading && (
                <Center
                position='fixed'
                top="0"
                left="0"
                width="100%"
                height="100%"
                zIndex="9999"
                bg="rgba(0, 0, 0, 0.5)"
                >
                <Spinner size={"xl"} color={'white'}/>
                </Center>
            )}
            <Flex pt={5} align={'center'} justify={'center'} color={'white'}>
                <Image pe={5} height={20} src={team.logo} alt={team.name}/>
                <Heading textAlign={'center'} size={'2xl'}>{team.name}</Heading>
                <Heading paddingInline={10}>@</Heading>
                <Heading textAlign={'center'} size={'2xl'}>{enemy.name}</Heading>
                <Image ps={5} height={20}
                       src={enemy.logo}
                       alt={team.name}/>
            </Flex>
            <Stack>
                <Button mt={10} alignContent={'center'} justifyContent={'center'} alignSelf={'center'} width={'5rem'}
                        padding={20} paddingInline={60} bgColor={'green'} color={'white'}
                        fontSize={30} _hover={{backgroundColor: 'darkgreen'}} onClick={simulate}>Simulate</Button>
                <Flex ps={5}>
                    <Stack>
                        <Heading pt={20} ps={40}>Lineup {team.code}</Heading>
                        <TableContainer overflowY={'auto'} overflowX={'auto'} height={'20rem'} width={'40rem'}>
                            <Table bgcolor="white" variant={'simple'} textColor={'black'}>
                                <Thead bgColor={'darkgray'} position={'sticky'} top={0}>
                                    <Tr>
                                        <Th>Player</Th>
                                        <Th>Position</Th>
                                        <Th>Offensive Rating</Th>
                                        <Th>Defensive Rating</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                {myPlayers.map(p => (
                                    <Tr>
                                      <Td>{p.name}</Td>
                                      <Td>{p.position}</Td>
                                      <Td>{p.offRating}</Td>
                                      <Td>{p.defRating}</Td>
                                    </Tr>
                                  ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Stack>
                    <Stack ps={40}>
                        <Heading pt={20} ps={40}>Lineup {enemy.code}</Heading>
                        <TableContainer overflowY={'auto'} overflowX={'auto'} height={'20rem'} width={'40rem'}>
                            <Table bgcolor="white" variant={'simple'} textColor={'black'}>
                                <Thead bgColor={'darkgray'}  position={'sticky'} top={0}>
                                    <Tr>
                                        <Th >Player</Th>
                                        <Th >Position</Th>
                                        <Th >Offensive Rating</Th>
                                        <Th>Defensive Rating</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                  {playerOfTeam.map(p => (
                                    <Tr>
                                      <Td>{p.name}</Td>
                                      <Td>{p.position}</Td>
                                      <Td>{p.offRating}</Td>
                                      <Td>{p.defRating}</Td>
                                    </Tr>
                                  ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Flex>

            </Stack>
        </div>
    );
}