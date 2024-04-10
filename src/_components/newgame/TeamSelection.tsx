
/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-10 09:45:48 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 09:53:55
 * @Description: Component to select your team 
 */

import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";



export const TeamSelection = () => {
  return (
    <div>
      <Heading textAlign={'center'} pt={10}>Choose your team</Heading>
      <Text textAlign={'center'} paddingInline={20} pt={5}>Choose your favorite team. Or choose a weaker team to work your way up to success, you can later sign with a new team.</Text>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={3} padding={20}>
        <Card>
          <CardHeader><Text textAlign={'center'} fontWeight={'bold'} fontSize={20}>Atlanta Hawks</Text></CardHeader>
          <CardBody>Hello</CardBody>
        </Card>
        {/*teams.map(t => (
          <Card>
            <CardHeader><Text textAlign={'center'} fontWeight={'bold'} fontSize={20}>Atlanta Hawks</Text></CardHeader>
            <CardBody>
              <Image src={t.logo}/>
            </CardBody>
          </Card>
        ))*/}
      </SimpleGrid>
   </div>
  );
}