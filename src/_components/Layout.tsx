import React, { ReactNode, useContext } from "react";
import { Box, Flex, VStack, Heading, Image, Spacer, Button, useDisclosure,
   Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
   Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import { TeamContext } from "../_contexts/TeamContext";
//import { TeamsContext } from "../_contexts/TeamsContext";
import { ITeam } from "../_common/models";
import { Link } from "react-router-dom";

interface Props {
  children : ReactNode
}

const Layout = ({ children } : Props) => {

  const [team ,setTeam] = useContext(TeamContext);
  //const [,setTeams] = useContext(TeamsContext);
  const { isOpen, onOpen, onClose } = useDisclosure()


  const onChangeTeam = () => {
    localStorage.removeItem("team");
    localStorage.removeItem("user");
    setTeam({} as ITeam);
    //setTeams([]);
  }

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box bg="gray.200" w="20rem" p="4">
        <VStack spacing="4">
          <Flex>
            <Heading mt={2} size="md">Navigation Pane</Heading>
            <Spacer />
            <Button ms={5} color={'white'} _hover={{bgColor: 'darkgreen'}} mb={5} bgColor={'green'}>Play →</Button>
          </Flex>
          <a>Roster</a> 
          <a>Schedule</a>
          <a>Free Agency</a>
          <a>Trade Players</a>
          {/* Add more navigation links as needed */}
          <Button mt={600} onClick={onOpen} color={'white'} bgColor={'red'}  _hover={{bgColor: 'darkred', color: "white"}}>Change team</Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Do you really want to change team?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>This will delete your current save and start a new career!</Text>
              </ModalBody>
              <ModalFooter>
                <Button bgColor={'red'} color={'white'} onClick={onChangeTeam}><Link to='/'>Yes, Delete</Link></Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Box color={"white"} flex="1" p="4" overflowY="auto">
          <Heading textAlign={'center'} size="md">Welcome to the</Heading>
          <Flex pt={5} align={'center'}justify={'center'} color={'white'}>
            <Image pe={5} height={20} src={team.logo} alt={team.name} />
            <Heading textAlign={'center'} size={'3xl'}>{team.name}</Heading>
          </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
