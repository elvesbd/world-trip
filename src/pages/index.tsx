import Prismic from '@prismicio/client';
import { Box, Image, Flex, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Options } from "../components/Options";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';


export default function Home({ continents }) {
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
      <Options />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5","14"]}
        fontSize={["lg",
        "3xl",
        "4xl"]}
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
   </>  
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url
    }
  })

  return {
    props: {
      continents
    }
  }
}