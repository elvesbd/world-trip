import { Flex } from "@chakra-ui/react";
import Content from "../../components/Content";
import { Header } from "../../components/Header";
import RegionBanner from "../../components/RegionBanner";

export default function Region() {
  return (
    <Flex direction='column'>
      <Header />
      <RegionBanner />

      <Flex
        direction='column'
        maxWidth='1160px'
        mx='auto'
        mb='10'
        px='1rem'
      >
        <Content />
      </Flex>
    </Flex>
  )
}