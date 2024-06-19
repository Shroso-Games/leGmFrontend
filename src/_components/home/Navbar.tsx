import { Box, Flex, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../../_images/lebomboclat.png";
/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-09 13:56:18 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-06-19 09:02:32
 * @Description: Simple NavBar component
 */


const Navbar = () => {


  const navigate = useNavigate();

  const move = (uri: string) => {
    window.location.href = uri;
  }

  return (
    <header className="bg-gray-800 p-2 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Flex onClick={() => move('/')} _hover={{cursor: 'pointer'}}>
            <Image src={logo} boxSize={10} mt={1} me={1}/>
            <a href="/" className="text-4xl font-bold">LeGM</a>
          </Flex>
          <nav>
            <a href="/register" style={{padding: 15, paddingInline: 40}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Play</a>
          </nav>
        </div>
      </header>
  );
};

export default Navbar;
