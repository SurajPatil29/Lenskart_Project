import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Discription() {
  return (
    <Box p={[4, 6, 8]} maxW="1200px" mx="auto">
      <Heading as="h1" fontSize={['2xl', '3xl', '4xl']} mb={4} textAlign="center">
        Buy the Best Eyewear From Lenskart
      </Heading>
      <Text fontSize="sm" mb={4} textAlign="justify">
        Lenskart is the leading e-commerce portal for eyewear in India. It has revolutionised the eyewear industry in the country with its omni-channel approach. From an ever-growing number of offline stores across major cities in the country to innovative integration of technology while purchasing online, Lenskart caters to every customer with several deals and offers.
      </Text>
      <Text fontSize="sm" textAlign="justify">
        A one-stop online solution for purchasing eyewear and its accessories, Lenskart delivers them right at your doorstep with convenient methods of payment. Sunglasses as well as eyeglasses are available for men and women in a diverse array of styles and trendy colours. If you want to try out contact lenses, pick the ones of your choice from the extensive variety of coloured contact lenses from our online store.
      </Text>
    </Box>
  );
}

export { Discription };
