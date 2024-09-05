import React from 'react';
import { useSelector } from 'react-redux';
import { Prod } from './Prod';
import { Box, Grid, Text } from '@chakra-ui/react';

function RightSideE() {
  const { products } = useSelector((state) => state.eyeglasess);
  const product = products.products;

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>EYEGLASSES</Text>
      <Grid 
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))" // Responsive grid
        gap={6} // Space between grid items
      >
        {product && product.length ? (
          product.map((prod, i) => (
            <Prod key={i} data={prod} />
          ))
        ) : (
          <Text>No products available</Text>
        )}
      </Grid>
    </Box>
  );
}

export { RightSideE };
