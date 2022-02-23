import { Grid, Heading } from "@chakra-ui/react";
import City from "../City";

export default function Cities() {
  return (
    <>
      <Heading
        fontWeight='500'
        fontSize={['2xl', '4xl']}
        mb='10'
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}
      >
        <City 
          image='/images/londres.jpg' 
          city='Londres' 
          country='Reino Unido' 
          flag='/images/bandeira.png'
        />
         <City 
          image='/images/paris.png' 
          city='Paris' 
          country='França' 
          flag='/images/band-franca.jpeg'
        />
         <City 
          image='/images/roma.png' 
          city='Roma' 
          country='Itália' 
          flag='/images/band-italia.png'
        />
         <City 
          image='/images/praga.png' 
          city='Praga' 
          country='Republica Tcheca' 
          flag='/images/band-rep-tcheca.png'
        />
         <City 
          image='/images/amsterda.png' 
          city='Amsterdã' 
          country='Holanda' 
          flag='/images/band-holanda.png'
        />
      </Grid>
    </>
  )
}