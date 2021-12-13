import { Box, Image, Flex, Text, Grid, HStack } from "@chakra-ui/react";
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

      <Box mt='100px'>
        <HStack>
          <Flex flexDirection='column' align='center' justify='center'>
            <Image src='/cocktail.png' alt='Airplane' />
            <Text mt='24px'>vida noturna</Text>
          </Flex>
          <Flex flexDirection='column' align='center' justify='center'>
            <Image src='/beach.png' alt='Airplane' />
            <Text mt='24px'>praia</Text>
          </Flex>
          <Flex flexDirection='column' align='center' justify='center'>
            <Image src='/building.png' alt='Airplane' />
            <Text mt='24px'>moderno</Text>
          </Flex>
          <Flex flexDirection='column' align='center' justify='center'>
            <Image src='/museum.png' alt='Airplane' />
            <Text mt='36px'>clássico</Text>
          </Flex>
          <Flex flexDirection='column' align='center' justify='center'>
            <Image src='/earth.png' alt='Airplane' />
            <Text mt='24px'>e mais...</Text>
          </Flex>
        </HStack>
      </Box>
   </>  
  );
}
