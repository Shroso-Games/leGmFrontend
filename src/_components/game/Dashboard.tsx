import { Flex, Heading, TableContainer, Table, Thead, Tr, Td, Tbody, Th, Stack,Image } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { TeamsContext } from "../../_contexts/TeamsContext";

interface Props {
  children : ReactNode
}

export const Dashboard = () => {
  const [team] = useContext(TeamContext);
  const [teamss] = useContext(TeamsContext);
  return (
    <div>
      <Heading textAlign={'center'} size="md">Welcome to the</Heading>
          <Flex pt={5} align={'center'}justify={'center'} color={'white'}>
            <Image pe={5} height={20} src={team.logo} alt={team.name} />
            <Heading textAlign={'center'} size={'3xl'}>{team.name}</Heading>
          </Flex>
      <Flex pt={30}>
        <div>
          <Heading ps={8} pt={5}>Conf. Standings</Heading>
          <TableContainer mt={5} width={'20rem'}>
                <Table bgColor={'white'} variant={'simple'} textColor={'whiteAlpha'}  color={'white'}>
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
                  <Table bgColor={'white'} variant={'simple'} textColor={'whiteAlpha'}  color={'white'}>
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
          <Heading paddingStart={'14rem'} pt={5}>Next Up</Heading>
            <TableContainer ms={20} mt={5} width={'25rem'}>
                  <Table bgColor={'white'} variant={'simple'} textColor={'whiteAlpha'}  color={'white'}>
                    <Thead bgColor={'darkGrey'}>
                      <Tr>
                        <Th>TEAM</Th>
                        <Th>RECORD</Th>
                        <Th>DAYS</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Th>vs Lakers</Th>
                        <Th>29-11</Th>
                        <Th>3</Th>
                      </Tr>
                      <Tr>
                        <Th>vs Mavericks</Th>
                        <Th>30-10</Th>
                        <Th>6</Th>
                      </Tr>
                      <Tr>
                        <Th>@ Suns</Th>
                        <Th>23-15</Th>
                        <Th>9</Th>
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