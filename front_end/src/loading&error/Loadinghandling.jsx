// LoadingSpinner.jsx
import React from 'react';
import { Box, Image } from '@chakra-ui/react';

// Loader image URL
const loaderImage = "https://static.lenskart.com/media/desktop/img/loader-lk.gif";

// LoadingSpinner Component
const Loadinghandling = () => {
  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Full viewport height for centering
    >
      <Image src={loaderImage} alt="Loading..." />
    </Box>
  );
};

export {Loadinghandling}
