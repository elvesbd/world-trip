import { Box, Image, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";

export default function Home() {
  return (
   <>
      <Header />

      <Box height={335}>
        <Image position='absolute' src='/Background.png' alt='Airplane' />
        <Flex marginX='32' position='relative' align='center' justify='space-between'>
          <Box>
            <Flex direction='column' width='500'>
              <Text 
                width={426} 
                height={108} 
                fontSize={34} 
                color='light.info.100' 
                fontWeight='bold' 
              >
                5 Continentes, <br/>infinitas possibilidades.
              </Text>
              <Text 
                width={521} 
                height={57} 
                mt='2' 
                mb='6' 
                fontSize={20} 
                color='light.info.300' 
                fontWeight='400'
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
              </Text>
            </Flex>
          </Box>
          <Box mt='16'>
            <Image src='/Airplane.png' alt='Airplane'/>
          </Box>
        </Flex>
      </Box>  
   </>  
  );
}
