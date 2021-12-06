import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../../public/Logo.png'

export function Header() {
  return (
    <Flex 
      as="header" 
      w='100%' 
      maxWidth={1440} 
      h='20'
      marginX='auto'
      paddingX='6'
      align='center'
      justifyContent='center'
    >
      <Image 
        src={logo}
        alt='World Trip' 
      />
    </Flex>
  )
}