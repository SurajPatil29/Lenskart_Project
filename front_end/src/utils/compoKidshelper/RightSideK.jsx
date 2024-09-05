import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Text } from '@chakra-ui/react';
import { ProdK } from './ProdK';

function RightSideK() {
  const { products } = useSelector((state) => state.kidGlasses); // Access the kidGlasses state
  const product = products.products;

  return (
    <Box p={6}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>KIDS GLASSES</Text>
      <Grid 
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))" // Responsive grid
        gap={6} // Space between grid items
      >
        {product && product.length ? (
          product.map((prod, i) => (
            <ProdK key={i} data={prod} />
          ))
        ) : (
          <Text>No products available</Text>
        )}
      </Grid>
    </Box>
  );
}

export { RightSideK };
