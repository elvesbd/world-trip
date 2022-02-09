import React from "react";
import Prismic from '@prismicio/client';
import { Box, Image, Flex, Text, Heading } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Options } from "../components/Options";
import { Separator } from "../components/Separator";
import { Slider } from "../components/Slider";
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import { Banner } from "../components/banner";


export default function Home({ continents }) {
  return (
   <Flex direction='column'>
      <Header />
      <Banner />
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
   </Flex>  
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