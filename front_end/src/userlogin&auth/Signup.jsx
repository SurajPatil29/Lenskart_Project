import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    email: '',
    password: '',
    gender: '',
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
      const response = await axios.post('https://lenskart-project.onrender.com/user/signup', formData);
      setSuccess(response.data.msg);
      console.log(response)
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
      position="relative"
      width="100%"
      height="100vh"
      bgImage="url('https://entrackr.com/storage/2022/05/Lenskart.jpg')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'rgba(0, 0, 0, 0.5)', // Dark overlay with transparency
        zIndex: 0,
        transition: 'opacity 1s ease-in-out', // Smooth transition effect
        opacity: 1, // Start fully opaque
      }}
      _hover={{
        _before: {
          opacity: 0.7, // Reduced opacity on hover for transition effect
        },
      }}
    >
      <Box
        position="relative"
        width="400px"
        p="6"
        borderRadius="md"
        boxShadow="lg"
        zIndex={1} // Ensure the form is above the background image
        bg="rgba(255, 255, 255, 0.2)" // Semi-transparent white background
        backdropFilter="blur(10px)" // Apply blur effect
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            {/* Name Input */}
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                bg="whiteAlpha.800"
              />
            </FormControl>

            {/* Birthdate Input */}
            <FormControl isRequired>
              <FormLabel>Birth Date</FormLabel>
              <Input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="Enter your birth date"
                bg="whiteAlpha.800"
              />
            </FormControl>

            {/* Email Input */}
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                bg="whiteAlpha.800"
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
                bg="whiteAlpha.800"
              />
            </FormControl>

            {/* Gender Input */}
            <FormControl isRequired>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                onChange={(value) => setFormData({ ...formData, gender: value })}
                value={formData.gender}
              >
                <VStack align="start">
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  
                </VStack>
              </RadioGroup>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" colorScheme="blackAlpha" width="full" color="black">
              Sign Up
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

export { Signup };
