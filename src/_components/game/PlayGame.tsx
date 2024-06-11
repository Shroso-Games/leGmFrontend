import {
    Button,
    Center,
    Flex,
    Heading,
    Image, Spinner,
    Stack,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {useContext, useState} from "react";
import {TeamContext} from "../../_contexts/TeamContext";
import {pythonClient} from "../../_services/api-client";
import {IMatch, IMatchResponse} from "../../_common/models";
import {useNavigate} from "react-router-dom";


export const PlayGame = () => {
    const [team] = useContext(TeamContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [, setOutcome] = useState<IMatchResponse>({} as IMatchResponse);
    const navigate = useNavigate();

    const simulate = () => {
        const test: IMatch = {
            "home_team": {
                "abbr": "ATL",
                "wins": 30,
                "losses": 10,
                "name": "Atlanta Hawks",
                "players": [
                    {"name": "Trae Young", "offRating": 80, "defRating": 80, position: 'PG'},
                    {"name": "Trae Young", "offRating": 70, "defRating": 70, position: 'PG'},
                    {"name": "Trae Young", "offRating": 60, "defRating": 60, position: 'PG'},
                    {"name": "Trae Young", "offRating": 50, "defRating": 50, position: 'PG'},
                    {"name": "Trae Young", "offRating": 40, "defRating": 40, position: 'PG'},
                    {"name": "Trae Young", "offRating": 30, "defRating": 30, position: 'PG'},
                    {"name": "Trae Young", "offRating": 20, "defRating": 20, position: 'PG'},
                    {"name": "Trae Young", "offRating": 10, "defRating": 10, position: 'PG'},
                    {"name": "Trae Young", "offRating": 0, "defRating": 0, position: 'PG'},
                    {"name": "Trae Young", "offRating": 0, "defRating": 0, position: 'PG'}
                ]
            },
            "away_team": {
                "abbr": "DAL",
                "wins": 40,
                "losses": 0,
                "name": "Dallas Mavericks",
                "players": [
                    {"name": "Luka Doncic", "offRating": 90, "defRating": 90, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 80, "defRating": 80, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 70, "defRating": 70, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 60, "defRating": 60, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 50, "defRating": 50, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 40, "defRating": 40, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 30, "defRating": 30, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 20, "defRating": 20, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 10, "defRating": 10, position: 'PG'},
                    {"name": "Luka Doncic", "offRating": 0, "defRating": 0, position: 'PG'}
                ]
            },
            "my_team": 0
        }
        let result: IMatchResponse = {} as IMatchResponse;
        pythonClient.post('/predict', test)
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
                <Heading textAlign={'center'} size={'2xl'}>Dallas Mavericks</Heading>
                <Image ps={5} height={20}
                       src={'https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/1200px-Dallas_Mavericks_logo.svg.png'}
                       alt={team.name}/>
            </Flex>
            <Stack>
                <Button mt={10} alignContent={'center'} justifyContent={'center'} alignSelf={'center'} width={'5rem'}
                        padding={20} paddingInline={60} bgColor={'green'} color={'white'}
                        fontSize={30} _hover={{backgroundColor: 'darkgreen'}} onClick={simulate}>Simulate</Button>
                <Flex ps={5}>
                    <Stack>
                        <Heading pt={20} ps={40}>Starting five {team.code}</Heading>
                        <TableContainer width={'40rem'}>
                            <Table bgcolor="white" variant={'simple'} textColor={'black'}>
                                <Thead bgColor={'darkgray'}>
                                    <Tr>
                                        <Th>Player</Th>
                                        <Th>Position</Th>
                                        <Th>Offensive Rating</Th>
                                        <Th>Defensive Rating</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Th>T. Young</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>80</Th>
                                        <Th textAlign={'center'}>71</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>T. Young</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>80</Th>
                                        <Th textAlign={'center'}>71</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>T. Young</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>80</Th>
                                        <Th textAlign={'center'}>71</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>T. Young</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>80</Th>
                                        <Th textAlign={'center'}>71</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>T. Young</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>80</Th>
                                        <Th textAlign={'center'}>71</Th>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Stack>
                    <Stack ps={40}>
                        <Heading pt={20} ps={40}>Starting five DAL</Heading>
                        <TableContainer width={'40rem'}>
                            <Table bgcolor="white" variant={'simple'} textColor={'black'}>
                                <Thead bgColor={'darkgray'}>
                                    <Tr>
                                        <Th>Player</Th>
                                        <Th>Position</Th>
                                        <Th>Offensive Rating</Th>
                                        <Th>Defensive Rating</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Th>L. Doncic</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>89</Th>
                                        <Th textAlign={'center'}>80</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>L. Doncic</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>89</Th>
                                        <Th textAlign={'center'}>80</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>L. Doncic</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>89</Th>
                                        <Th textAlign={'center'}>80</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>L. Doncic</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>89</Th>
                                        <Th textAlign={'center'}>80</Th>
                                    </Tr>
                                    <Tr>
                                        <Th>L. Doncic</Th>
                                        <Th textAlign={'center'}>PG</Th>
                                        <Th textAlign={'center'}>89</Th>
                                        <Th textAlign={'center'}>80</Th>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Flex>

            </Stack>
        </div>
    );
}