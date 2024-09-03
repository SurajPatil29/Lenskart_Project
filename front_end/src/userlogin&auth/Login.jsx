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
  Spinner,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {ErrorHandler} from '../loading&error/Errorhandling'; // Import the ErrorHandler component

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await axios.post('https://lenskart-project.onrender.com/user/login', formData);
      setSuccess(response.data.msg);

      // Handle the tokens and expiration
      const { accessToken, refreshToken, expiryTimestamp } = response.data;

      // Save tokens in local storage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('expiryTimestamp', expiryTimestamp);

      console.log('Tokens saved to local storage');
      setLoading(false);  // Stop loading
      // Redirect to the dashboard or another page after successful login
      navigate('/dashboard'); // Example route, change it to the actual route
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
      position="relative"
    >
      <Box
        width={['90%', '75%', '400px', '400px']} // Responsive width
        p="20px"
        borderRadius="8px"
        bg="rgba(255, 255, 255, 0.2)"
        backdropFilter="blur(10px)"
        boxShadow="lg"
      >
        {/* Display ErrorHandler Component */}
        <ErrorHandler error={error} onClose={() => setError('')} />

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
            <Button
              type="submit"
              colorScheme="blackAlpha"
              width="full"
              isLoading={loading}  // Show spinner and disable button when loading
              spinner={<Spinner size="sm" />}  // Custom spinner
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            {/* Display Success Message */}
            {success && <Box color="black.500">Login Successful</Box>}
          </VStack>
        </form>
      </Box>

      {/* Sign Up Button at Bottom Right */}
      <Button
        position="absolute"
        bottom={['10px', '20px']}
        right={['10px', '20px']}
        colorScheme="teal"
        size="sm"
        onClick={() => navigate('/signUp')}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export { Login };
