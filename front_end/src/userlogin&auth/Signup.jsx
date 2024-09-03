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
  Spinner,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {ErrorHandler} from '../loading&error/Errorhandling';  // Import your ErrorHandler component

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
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);  // Start loading

    try {
      const response = await axios.post('https://lenskart-project.onrender.com/user/signup', formData);
      setSuccess(response.data.msg);
      console.log(response);
      setLoading(false);  // Stop loading
    } catch (err) {
      console.log(err.response);
      setLoading(false);  // Stop loading
      if (err.response && err.response.data) {
        setError(err.response.data.msg);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  // Function to handle navigation to the login page
  const handleLoginNavigation = () => {
    navigate('/login');
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
    >
      <Box
        width={['90%', '75%', '400px', '400px']}  // Responsive width
        p="6"
        borderRadius="md"
        boxShadow="lg"
        zIndex={1}
        bg="rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(10px)"
      >
        {/* Display ErrorHandler Component */}
        <ErrorHandler error={error} onClose={() => setError('')} />

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
            <Button
              type="submit"
              colorScheme="blackAlpha"
              width="full"
              color="black"
              isLoading={loading}  // Disable button and show spinner when loading
              spinner={<Spinner size="sm" />}  // Custom spinner
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </Button>

            {/* Display Success Message */}
            {success && <Box color="black.500">{success}</Box>}
          </VStack>
        </form>
      </Box>
      {/* Login Button */}
      <Button
        onClick={handleLoginNavigation}
        colorScheme="teal"
        position="absolute"
        bottom={['10px', '20px']}
        right={['10px', '20px']}
        size="sm"
      >
        Login
      </Button>
    </Box>
  );
}

export { Signup };
