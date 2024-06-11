
/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-10 09:45:48 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 10:50:00
 * @Description: Component to select your team 
 */

import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { ITeam } from "../../_common/models";
import { useContext } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { useNavigate } from "react-router-dom";




export const TeamSelection = () => {

  const navigate = useNavigate();

  const testTeam : ITeam = {
    id: 1,
    name: "Atlanta Hawks",
    city: "Atlanta",
    code: "ATL",
    allStar: false,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/640px-Atlanta_Hawks_logo.svg.png",
    nbaFranchise: true,
    nickname: "Hawks"
  }

  const [,setTeam] = useContext(TeamContext);

  const selectTeam = (team : ITeam) => {
    setTeam(team);
    navigate('/');
    window.location.reload();

  }

  return (
    <div>
      <Heading textAlign={'center'} pt={10}>Choose your team</Heading>
      <Text textAlign={'center'} paddingInline={20} pt={5}>Choose your favorite team. Or choose a weaker team to work your way up to success, you can later sign with a new team.</Text>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={3} padding={20}>
        <Card>
          <CardHeader><Text textAlign={'center'} fontWeight={'bold'} fontSize={20}>Atlanta Hawks</Text></CardHeader>
          <CardBody textAlign={'center'}>
            <Image src={'https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Atlanta_Hawks_logo.svg/640px-Atlanta_Hawks_logo.svg.png'}/>
            <Button mt={3} onClick={() => selectTeam(testTeam)} backgroundColor={"lightblue"}>Choose</Button>
          </CardBody>
        </Card>
        {/*teams.map(t => (
          <Card>
            <CardHeader><Text textAlign={'center'} fontWeight={'bold'} fontSize={20}>Atlanta Hawks</Text></CardHeader>
            <CardBody>
              <Image src={t.logo}/>
              <Button mt={3} backgroundColor={"lightblue"}>Choose</Button>
            </CardBody>
          </Card>
        ))*/}
      </SimpleGrid>
   </div>
  );
}