import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <Box borderRadius='4px' overflow='hidden'    >
      <Image src='/images/londres.jpg' w='100%' h='170px' alt='London City'/>
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
            Londres
          </Heading>
          <Text
            mt='3'
            fontSize='md'
            color='gray.500'
            fontWeight='500'
          >
            Reino Unido
          </Text>
        </Flex>
        <Image 
          src='/images/bandeira.png' 
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