import { Box, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-09 13:56:18 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-06-18 14:44:19
 * @Description: Simple NavBar component
 */


const Navbar = () => {


  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 p-2 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-4xl font-bold">LeGM</a>
          <nav>
            <a href="#" className="text-gray-300 hover:text-white ml-2">Home</a>
            <a href="#" className="text-gray-300 hover:text-white ml-2">Features</a>
            <a href="#" className="text-gray-300 hover:text-white ml-2">About</a>
            <a href="#" className="text-gray-300 hover:text-white ml-2">Contact</a>
          </nav>
        </div>
      </header>
  );
};

export default Navbar;
