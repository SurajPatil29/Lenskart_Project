import React from 'react';
import { Alert, AlertIcon, Box, CloseButton } from '@chakra-ui/react';

const ErrorHandler = ({ error, onClose }) => {
  if (!error) return null; // Return null if there's no error

  return (
    <Box mb={4}>
      <Alert status="error">
        <AlertIcon />
        {error}
        <CloseButton onClick={onClose} position="absolute" right="8px" top="8px" />
      </Alert>
    </Box>
  );
};

export {ErrorHandler}
