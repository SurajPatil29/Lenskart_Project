import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Flex, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function BuyProdE() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details by ID
    const fetchProductDetails = async () => {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          authentication: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(`https://lenskart-project.onrender.com/eyeGlasses/product/${id}`, config);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };
    fetchProductDetails();
  }, [id]);

  return (
    <Flex direction={{ base: 'column', md: 'row' }} p={8} gap={8} align="flex-start">
      {/* Left Side: Product Image and Title */}
      <Box flex="1" borderWidth="1px" borderRadius="md" p={4} bg="white" boxShadow="md">
        <Image
          src={product?.image}
          alt={product?.title}
          objectFit="cover"
          borderRadius="md"
          mb={4}
          maxH="300px"
          w="100%"
        />
        <Text fontSize="2xl" fontWeight="bold" mb={2}>
          {product?.title}
        </Text>
        <Text fontSize="lg" color="green.500" fontWeight="bold">
          ₹{product?.price}
        </Text>
      </Box>

      {/* Right Side: Address Form */}
      <Box flex="1" borderWidth="1px" borderRadius="md" p={6} bg="white" boxShadow="md">
        <Text fontSize="2xl" mb={4} fontWeight="bold">
          Shipping Address
        </Text>

        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" placeholder="Enter your full name" />
          </FormControl>

          <FormControl>
            <FormLabel>Address Line 1</FormLabel>
            <Input type="text" placeholder="Enter your address" />
          </FormControl>

          <FormControl>
            <FormLabel>Address Line 2</FormLabel>
            <Input type="text" placeholder="Apartment, suite, etc." />
          </FormControl>

          <FormControl>
            <FormLabel>City</FormLabel>
            <Input type="text" placeholder="Enter your city" />
          </FormControl>

          <FormControl>
            <FormLabel>Postal Code</FormLabel>
            <Input type="text" placeholder="Enter your postal code" />
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" placeholder="Enter your phone number" />
          </FormControl>

          <Button colorScheme="teal" size="lg" mt={4} width="full">
            Place Order
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export { BuyProdE };
