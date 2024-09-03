import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@chakra-ui/react';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      alert("You're already logged out.");
      navigate('/login');
      return;
    }

    try {
      // Send the logout request to the server
      await axios.post(
        'https://lenskart-project.onrender.com/user/logout',
        {},
        {
          headers: {
            'Authentication': `Bearer ${accessToken}`,
          },
        }
      );

      // Clear tokens from local storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expiryTimestamp');

      alert('You have been logged out successfully.');

      // Redirect to the login page
      navigate('/home');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('An error occurred during logout. Please try again.');
    }
  };

  return (
    <Button onClick={handleLogout} colorScheme="red" variant="solid">
      Logout
    </Button>
  );
}

export { Logout };
