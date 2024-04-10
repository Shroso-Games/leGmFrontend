import { Box, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-09 13:56:18 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 10:10:13
 * @Description: Simple NavBar component
 */


const Navbar = () => {


  const navigate = useNavigate();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bgColor={'black'}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box>
        <img src="https://preview.redd.it/w86bz2bk89sc1.jpeg?width=640&crop=smart&auto=webp&s=fddba89ed7cd554f9057aa088b4b815bf8f899e8" alt="Logo" style={{ height: "40px" }} />
      </Box>

      <Button
        variant="solid"
        borderRadius={10}
        colorScheme="blue"
        fontWeight="bold"
        textAlign={'center'}
        onClick={() => navigate("/chooseteam")}
        px="4"
        py="2"
      >
        New game
      </Button>
    </Flex>
  );
};

export default Navbar;
