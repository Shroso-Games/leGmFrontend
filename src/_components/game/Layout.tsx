import React, { ReactNode, useContext } from "react";
import { Box, Flex, VStack, Heading, Image, Link, Spacer, Button, useDisclosure,
   Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,
   Text } from "@chakra-ui/react";
import { TeamContext } from "../../_contexts/TeamContext";
//import { TeamsContext } from "../_contexts/TeamsContext";


interface Props {
  children : ReactNode
}

const Layout = ({ children } : Props) => {

  const [team ,setTeam] = useContext(TeamContext);
  //const [,setTeams] = useContext(TeamsContext);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onChangeTeam = () => {
    localStorage.removeItem("team");
    window.location.reload();
    //setTeams([]);
  }

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box bg="gray.200" w="20rem" p="4">
        <VStack spacing="4">
          <Flex color={"black"}>
            <Heading mt={2} size="md">Navigation Pane</Heading>
            <Spacer />
            <Button ms={5} color={'white'} _hover={{bgColor: 'darkgreen'}} mb={5} bgColor={'green'}><a href="/sim">Play →</a></Button>
          </Flex>
          <Link color={"black"} href="/">Dashboard</Link>
          <Link color={"black"} href="/roster">Roster</Link> 
          <Link color={"black"}>Schedule</Link>
          <Link color={"black"}>Free Agency</Link>
          <Link color={"black"}>Trade Players</Link>
          {/* Add more navigation links as needed */}
          <Button mt={600} onClick={onOpen} color={'white'} bgColor={'red'}  _hover={{bgColor: 'darkred', color: "white"}}>Change team</Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color={"black"}>Do you really want to change team?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text color={"black"}>This will delete your current save and start a new career!</Text>
              </ModalBody>
              <ModalFooter>
                <Button bgColor={'red'} color={'white'} onClick={onChangeTeam}>Yes, Delete</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Box color={"white"} flex="1" p="4" overflowY="auto">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
