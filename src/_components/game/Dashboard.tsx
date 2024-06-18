/*

 Author: schoeni-mo
 Email: soemod20@htl-kaindorf.at

 Creation Date: 2024-05-11 12:44:16
 Last Modification Date: 2024-06-18 19:45:38

 

*/



import { Flex, Heading, TableContainer, Table, Thead, Tr, Td, Tbody, Th, Stack, Image } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { TeamsContext } from "../../_contexts/TeamsContext";





export const Dashboard = () => {
  const [team] = useContext(TeamContext);
  const [teamss] = useContext(TeamsContext);
  return (
    <div>
      <Heading textAlign={'center'} size="md">Welcome to the</Heading>
      <Flex pt={5} align={'center'} justify={'center'} color={'white'}>
        <Image pe={5} height={20} src={team.logo} alt={team.name} />
        <Heading textAlign={'center'} size={'3xl'}>{team.name}</Heading>
      </Flex>
      <Flex pt={30}>
        <div>
          <Heading ps={8} pt={5}>Conf. Standings</Heading>
          <TableContainer mt={5} width={'20rem'}>
            <Table bgColor={'white'} variant={'simple'} textColor={'whiteAlpha'} color={'white'}>
              <Thead bgColor={'darkGrey'}>
                <Tr>
                  <Th>Team</Th>
                  <Th isNumeric>Win</Th>
                  <Th isNumeric>Loss</Th>
                </Tr>
              </Thead>
              <Tbody>{teamss.filter(t => t.teamID > 17).map(t => (
                <Tr bg={team.teamID == t.teamID ? 'lightgreen' : 'white'}>
                  <Th>{t.name.split(' ').length > 2 ? t.name.split(' ')[2] : t.name.split(' ')[1]}</Th>
                  <Th textAlign={'center'}>-</Th>
                  <Th textAlign={'center'}>-</Th>
                </Tr>
              ))}</Tbody>
            </Table>
          </TableContainer>
        </div>
        <Stack>
          <div>
            <Heading paddingStart={'11rem'} pt={5}>Injury Report</Heading>
            <TableContainer ms={20} mt={5} width={'25rem'}>
              <Table bgColor={'white'} variant={'simple'} textColor={'whiteAlpha'} color={'white'}>
                <Thead bgColor={'darkGrey'}>
                  <Tr>
                    <Th>PLAYER</Th>
                    <Th>DURATION</Th>
                    <Th>INJURY</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Th>L. James</Th>
                    <Th>SEASON</Th>
                    <Th>Torn ACL</Th>
                  </Tr>
                  <Tr>
                    <Th>N. Jokic</Th>
                    <Th>3 WEEKS</Th>
                    <Th>Twisted Ankle</Th>
                  </Tr>
                  <Tr>
                    <Th>L. Doncic</Th>
                    <Th>DAY-TO-DAY</Th>
                    <Th>FAT</Th>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <Heading paddingStart={'10.5rem'} pt={5}>Recent Games</Heading>
            <TableContainer ms={20} mt={5} width={'25rem'}>
              <Table bgColor={'white'} variant={'simple'} textColor={'black'} color={'black'}>
                <Thead bgColor={'darkGrey'}>
                  <Tr>
                    <Th textAlign={'center'}>Opp.</Th>
                    <Th>RECORD</Th>
                    <Th textAlign={'center'}>Score</Th>
                    <Th textAlign={'center'}>W/L</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/*! INFO: This is only temporary mock data*/}
                  <Tr>
                    <Td>@ ORL</Td>
                    <Td>20-5</Td>
                    <Td textAlign={'center'}>110-105</Td>
                    <Td textAlign={'center'} color={'green'}>W</Td>
                  </Tr>
                  <Tr>
                    <Td>vs DAL</Td>
                    <Td>20-5</Td>
                    <Td textAlign={'center'}>95-107</Td>
                    <Td textAlign={'center'} color={'red'}>L</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>

        </Stack>


      </Flex>
    </div>
  );
}