
/*
 * @Author: Moritz Schöninger 
 * @Email: soemod20@htl-kaindorf.at
 * @Date: 2024-04-10 09:45:48 
 * @Last Modified by: Moritz Schöninger
 * @Last Modified time: 2024-04-10 10:50:00
 * @Description: Component to select your team 
 */

import { Card, CardBody, CardHeader, Heading, SimpleGrid, Text, Image, Button, Box } from "@chakra-ui/react";
import { ITeam } from "../../_common/models";
import { useContext } from "react";
import { TeamContext } from "../../_contexts/TeamContext";
import { useNavigate } from "react-router-dom";
import { TeamsContext } from "../../_contexts/TeamsContext";
import { useTeams } from "../../_hooks/useTeams";




export const TeamSelection = () => {

  const navigate = useNavigate();


  const [,setTeam] = useContext(TeamContext);
  const [teamss] = useContext(TeamsContext);
  const error = useTeams();

  const selectTeam = (team : ITeam) => {
    setTeam(team);
    navigate('/');
    window.location.reload();
  }

  return (
    <div>
      {error && <Text>{error}</Text>}
      <Heading textAlign={'center'} pt={10}>Choose your team</Heading>
      <Text textAlign={'center'} paddingInline={20} pt={5}>Choose your favorite team. Or choose a weaker team to work your way up to success, you can later sign with a new team.</Text>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={3} padding={20}>
        {teamss.map(t => (
          <Card>
            <CardHeader><Text textAlign={'center'} fontWeight={'bold'} fontSize={20}>{t.name}</Text></CardHeader>
            <CardBody>
              <Image objectFit={'contain'} mx={'auto'} boxSize={'150px'} src={t.logo}/>
              <Box justifyContent={'center'} display={'flex'}><Button mt={3} onClick={() => selectTeam(t)} backgroundColor={"lightblue"}>Choose</Button></Box>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
   </div>
  );
}