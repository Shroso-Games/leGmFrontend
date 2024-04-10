
/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-10 09:45:48 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 11:34:28
 * @Description: Component to select your team 
 */

import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { ITeam } from "../../_common/models";



export const TeamSelection = () => {

  const [, setTeam] = useContext(TeamContext);

  const chooseTeam = () => {
    /**=======================
     * !      WARNING
     *  Only temporary function
     *  for test purposes
     *========================**/
    setTeam({} as ITeam);
    window.location.reload();
  }

  return (
    <div>
      <Heading textAlign={'center'} pt={10}>Choose your team</Heading>
      <Text textAlign={'center'} paddingInline={20} pt={5}>Choose your favorite team. Or choose a weaker team to work your way up to success, you can later sign with a new team.</Text>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={3} padding={20}>
        <Card>
          <CardHeader><Text textAlign={'center'} fontWeight={'bold'} fontSize={20}>Atlanta Hawks</Text></CardHeader>
          <CardBody>Hello
            <Button onClick={() => chooseTeam()}>Choose</Button>
          </CardBody>
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