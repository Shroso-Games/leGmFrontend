/*

 Author: schoeni-mo
 Email: soemod20@htl-kaindorf.at

 Creation Date: 2024-06-09 15:27:15
 Last Modification Date: 2024-06-19 00:01:29

 
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
import {apiClient, pythonClient} from "../../_services/api-client";
import {IGame, IMatch, IMatchPlayer, IMatchResponse, ITeam} from "../../_common/models";
import {useNavigate} from "react-router-dom";
import { TeamsContext } from "../../_contexts/TeamsContext";
import { PlayersContext } from "../../_contexts/PlayersContext";

export const PlayGame = () => {
    const [team] = useContext(TeamContext);
    const [teamss] = useContext(TeamsContext);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();


    const enemy: ITeam = teamss.find(t => t.teamID == 5) ?? {} as ITeam;

    const simulate = () => {
        const game : IMatch = {
            away_team: 5,
            home_team: team.teamID,
            user:  localStorage.getItem("user") && JSON.parse(localStorage.getItem('user') as string) != "{}" ?
            JSON.parse(localStorage.getItem("user") as string) : null,
            date: "2024-10-11",
            location: "Hawks Arena"
        }
        setLoading(true);
        apiClient.post<IGame>('/games/sim', {}, {params: {awayTeam: game.away_team, homeTeam: game.home_team, user: game.user, date: game.date, location: game.location}})
            .then(res => {
                localStorage.setItem('match_outcome', JSON.stringify(res.data));
                setLoading(false);
                navigate("/sim/match_outcome");
            })
            .catch(err => {
                console.log(err);
            });
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
                                  
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Flex>

            </Stack>
        </div>
    );
}