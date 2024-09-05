import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Flex, FormControl, FormLabel, Input, Button, VStack, Spinner, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

function BuyProdS() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const fetchProductDetails = async () => {
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          authentication: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(`https://lenskart-project.onrender.com/screenGlasses/product/${id}`, config);
        if (!response.ok) throw new Error('Failed to fetch product details.');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  if (loading) return <Spinner size="xl" />;
  if (error) return <Alert status="error"><AlertIcon /><AlertTitle>{error}</AlertTitle></Alert>;

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

        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input name="fullName" type="text" placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Address Line 1</FormLabel>
              <Input name="address1" type="text" placeholder="Enter your address" value={formData.address1} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Address Line 2</FormLabel>
              <Input name="address2" type="text" placeholder="Apartment, suite, etc." value={formData.address2} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>City</FormLabel>
              <Input name="city" type="text" placeholder="Enter your city" value={formData.city} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Postal Code</FormLabel>
              <Input name="postalCode" type="text" placeholder="Enter your postal code" value={formData.postalCode} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input name="phoneNumber" type="tel" placeholder="Enter your phone number" value={formData.phoneNumber} onChange={handleChange} />
            </FormControl>

            <Button colorScheme="teal" size="lg" mt={4} width="full" type="submit">
              Place Order
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}

export { BuyProdS };


