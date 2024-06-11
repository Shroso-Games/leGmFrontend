import { Flex, Heading, TableContainer, Table, Thead, Tr, Td, Tbody, Th, Stack,Image } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { TeamContext } from "../../_contexts/TeamContext";

interface Props {
  children : ReactNode
}

export const Dashboard = () => {
  const [team] = useContext(TeamContext);
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
                  <Tbody>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Lakers</Th>
                            <Th isNumeric>29</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Warriors</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>13</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr /*bgColor={t.name === team.name ? 'yellowgreen' : 'white'} key={t.name}*/>
                            <Th>Mavericks</Th>
                            <Th isNumeric>30</Th>
                            <Th isNumeric>11</Th>
                          </Tr>
                          <Tr bgColor={'yellowgreen'} /*key={t.name}*/>
                            <Th>Hawks</Th>
                            <Th isNumeric>20</Th>
                            <Th isNumeric>18</Th>
                          </Tr>
                  </Tbody>  
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