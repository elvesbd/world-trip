import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City(props) {
  console.log(props);
  return (
    <Box borderRadius='4px' overflow='hidden'>
      <Image src={props.image} w='100%' h='170px' alt='London City'/>
      <Flex
        p='6'
        align='center'
        justify='space-between'
        bg='white'
        border='1px'
        borderColor='yellow.300'
        borderTop='0'
      >
        <Flex direction='column'>
          <Heading
            fontSize='xl'
            fontWeight='500'
          >
            {props.city}
          </Heading>
          <Text
            mt='3'
            fontSize='md'
            color='gray.500'
            fontWeight='500'
          >
            {props.country}
          </Text>
        </Flex>
        <Image 
          src={props.flag} 
          alt='Bandeira Reino Unido'
          h='30px'
          w='30px'
          borderRadius='50%'  
          objectFit='cover'
        />
      </Flex>
    </Box>
  )
}