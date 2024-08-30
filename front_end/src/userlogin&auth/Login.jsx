import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Input, FormControl, FormLabel, FormErrorMessage, VStack } from '@chakra-ui/react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('https://lenskart-project.onrender.com/user/login', formData);
      setSuccess(response.data.msg);
      // Handle the tokens and expiration
    } catch (err) {
      console.log(err.response)
      if (err.response && err.response.data) {
        setError(err.response.data.msg);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage="url('https://entrackr.com/storage/2022/05/Lenskart.jpg')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        width="400px"
        p="20px"
        borderRadius="8px"
        bg="rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(10px)"
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            {/* Email Input */}
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </FormControl>

            {/* Password Input */}
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" colorScheme="blackAlpha" width="full">
              Login
            </Button>

            {/* Display Error Message */}
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
            {/* Display Success Message */}
            {success && <Box color="green.500">{success}</Box>}
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export { Login };
