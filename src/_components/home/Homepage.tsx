import { Heading, Text, Image, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import img from  "./legm.png";

/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-09 13:57:10 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-09 14:30:05
 * @Description: Homepage component showing the default homescreen when first visiting the page
 */


export const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Heading pt={20} textAlign={'center'}>Welcome to leGM</Heading>
      <Text pt={10} paddingInline={20} textAlign='center'>Are you ready to take on the challenge of leading your favorite NBA team to glory? Look no further! LeGM is the premier AI-powered NBA simulation game that puts you in the driver's seat of your dream team's destiny.</Text>
      <Stack
        justify={'center'}
        align={'center'}
        mt={10}
      >
        <Image width={'50%'} height={'50%'} src={img}></Image>
      </Stack>
      
    </>
  );
}