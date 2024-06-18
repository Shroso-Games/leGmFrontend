/*

 Author: schoeni-mo
 Email: soemod20@htl-kaindorf.at

 Creation Date: 2024-06-09 17:38:09
 Last Modification Date: 2024-06-18 19:48:48

 

*/
import {IMatchResponse} from "../../_common/models";
import {Flex, Heading, Table, TableContainer, Text, Thead, Tr, Th, Tbody, Td} from "@chakra-ui/react";
import {TeamContext} from "../../_contexts/TeamContext.tsx";
import {useContext} from "react";

export const MatchResults = () => {
    const results: IMatchResponse = localStorage.getItem("game_outcome") && JSON.parse(localStorage.getItem('game_outcome') as string) != "{}" ?
        JSON.parse(localStorage.getItem("game_outcome") as string) : null;
    const [team] = useContext(TeamContext);
    return (
        <div>
            {results.who_won == 1 ?
                <Flex justify={'center'}>
                    <Heading pt={20} size={'3xl'}>🏆 You win! 🏆</Heading>
                </Flex> :
                <Heading textAlign={'center'} pt={20} size={'3xl'}>❌ You Lose! ❌</Heading>}
            <Flex justify={'center'} pt={10}>
                <Text fontSize={40} textAlign={'center'}>LAL</Text>
                <Text paddingStart={5} fontSize={40} textAlign={'center'}>{
                    results.away_team.score > results.home_team.score ?
                        <Text color={'lightgreen'}>{results.away_team.score}</Text> :
                        <Text color={'red'}>{results.away_team.score}</Text>
                }</Text>
                <Text paddingInline={10} fontSize={40} textAlign={'center'}>-</Text>
                <Text fontSize={40} textAlign={'center'}>{
                    results.home_team.score > results.away_team.score ?
                        <Text color={'lightgreen'}>{results.home_team.score}</Text> :
                        <Text color={'red'}>{results.home_team.score}</Text>
                }</Text>
                <Text paddingStart={5} fontSize={40} textAlign={'center'}>DAL</Text>
            </Flex>
            
            <TableContainer overflowY={'auto'} overflowX={'auto'} height={'40rem'} mt={5}>
                <Table  variant={'striped'} textColor={'black'} bgColor={'white'}>
                    <Thead position={'sticky'} top={0} bgColor={'lightgrey'}>
                        <Tr>
                            <Th>Player</Th>
                            <Th>Position</Th>
                            <Th>Minutes</Th>
                            <Th>PTS</Th>
                            <Th>REB</Th>
                            <Th>AST</Th>
                            <Th>STL</Th>
                            <Th>BLK</Th>
                            <Th>FGM</Th>
                            <Th>FGA</Th>
                            <Th>FGPCT</Th>
                        </Tr>
                    </Thead>
                        {
                            results.whoami == 1 ?
                            <Tbody>{results.home_team.stats.map(p => (
                                <Tr>
                                    <Td>{p.name}</Td>
                                    <Td>{p.position}</Td>
                                    <Td>{p.minutes_played}</Td>
                                    <Td>{p.points}</Td>
                                    <Td>{p.rebounds}</Td>
                                    <Td>{p.assists}</Td>
                                    <Td>{p.steals}</Td>
                                    <Td>{p.blocks}</Td>
                                    <Td>{p.fgm}</Td>
                                    <Td>{p.fga}</Td>
                                    <Td>{p.fgpct}%</Td>
                                </Tr>
                            ))}</Tbody>:
                            <Tbody>{results.away_team.stats.map(p => (
                                <Tr>
                                    <Td>{p.name}</Td>
                                    <Td>{p.position}</Td>
                                    <Td>{p.minutes_played}</Td>
                                    <Td>{p.points}</Td>
                                    <Td>{p.rebounds}</Td>
                                    <Td>{p.assists}</Td>
                                    <Td>{p.steals}</Td>
                                    <Td>{p.blocks}</Td>
                                    <Td>{p.fgm}</Td>
                                    <Td>{p.fga}</Td>
                                    <Td>{p.fgpct}%</Td>
                                </Tr>
                            ))}</Tbody>
                        }

                </Table>
            </TableContainer>
        </div>
    );
}