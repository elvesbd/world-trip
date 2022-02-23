import { Flex, Grid, Icon, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link'

export function Header() {
  const { asPath } = useRouter()
  const notInHome = asPath !== '/'

  return (
    <Flex 
      bg='white'  
      w='100%' 
      as="header" 
      mx='auto'
      px='1rem'
      h={['50px', '100px']}
      align='center'
      justify='center'
    >
     <Grid
      h='100%'
      mx='auto'
      w='100%'
      maxW='1160px'
      templateColumns='repeat(3, 1fr)'
      justifyContent='center'
      alignItems='center'
     >

      {notInHome && (
        <Link href='/'>
          <a>
            <Icon 
              as={RiArrowLeftSLine} 
              fontSize={[15, 35]} 
              justifySelf='start' 
              display='block'
            />
          </a>
        </Link>
      )}

        <Image
          w={['81px', '184px']}
          src='/Logo.png'
          alt='World Trip'
          justifySelf='center'
          gridColumn='2'
        />
      </Grid>
    </Flex>
  )
}