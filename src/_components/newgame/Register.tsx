import { Box, Button, Center, FormControl, FormLabel, Heading, Input, Spinner } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { ISave } from "../../_common/models";
import { apiClient } from "../../_services/api-client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../home/Navbar";

export const Register = () => {

  const {register, handleSubmit} = useForm();

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);


  const onStartSave = (data: FieldValues) => {
    setLoading(true);
    localStorage.removeItem('user');
    const save : ISave = {
      userID: null,
      email: data.email,
      password: data.password
    }

  
    apiClient.post<ISave>('/teams/start', save)
      .then(res => {
         localStorage.setItem('user', JSON.stringify(res.data.userID));
         navigate('/chooseteam');
         setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      {loading && (
                <Center
                position='fixed'
                top="0"
                left="0"
                width="100%"
                height="100%"
                zIndex="9999"
                bg="rgba(0, 0, 0, 0.5)"
                >
                <Spinner size={"xl"} color={'white'}/>
                </Center>
            )}
      <Navbar/>
      <hr className="h-1 my-4"/>
      <Heading textAlign={'center'} pt={20} pb={20}>Login or create account</Heading>
      <Box maxW="sm" mx="auto" mt="10" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
        <form onSubmit={handleSubmit(onStartSave)}>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input {...register('email')} type="email" placeholder="Enter your email" />
          </FormControl>

          <FormControl id="password" isRequired mt="4">
            <FormLabel>Password</FormLabel>
            <Input {...register('password')} type="password" placeholder="Enter your password" />
          </FormControl>

          <Button mt="6" colorScheme="teal" type="submit">Submit</Button>
        </form>
      </Box>
    </div>
  );
}