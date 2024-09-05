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
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          authentication: `Bearer ${token}`,  // Corrected to Authorization header
        }
      };
      
      const responce = await axios.post(
        'https://lenskart-project.onrender.com/user/logout',
        config
      );

      // Clear tokens from local storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('expiryTimestamp');
      localStorage.removeItem('id');

      alert('You have been logged out successfully.');

      // Redirect to the login page
      navigate('/');
      console.log(responce)
    } catch (error) {
      console.log(error.responce)
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
