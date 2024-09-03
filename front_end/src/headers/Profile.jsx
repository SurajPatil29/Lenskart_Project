// src/components/ProfileImage.js
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, useDisclosure, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Center } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import UploadImagePopup from './UploadImagePopup';

const ProfileImage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profileImg, setProfileImg] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('id'); // Fetch user ID from local storage
    if (!userId) {
      setError('User ID not found.');
      setLoading(false);
      return;
    }

    const fetchProfileImg = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        // Set up headers with Authorization token
        const config = {
            headers: {
                authentication: `Bearer ${token}`,  // Include the token in the Authorization header
            },
        }
        const response = await axios.get('https://lenskart-project.onrender.com/profile/userProfileImg',config, {
          body: { userId },
          
        });
        setProfileImg(response.data.Img || ''); // Use empty string if no image
        console.log(response)
      } catch (error) {
        console.log(error.response)
        setError('Failed to load profile image.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileImg();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return (
      <Center>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </Alert>
      </Center>
    );
  }

  return (
    <Box>
      <Avatar
        size="xl"
        name="User"
        src={profileImg || 'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg'}
        cursor="pointer"
        onClick={!profileImg ? onOpen : null} // Open popup only if no image
      />
      {!profileImg && (
        <Button onClick={() => navigate('/upload')}>Upload Image</Button> // Redirect to upload page
      )}
      <UploadImagePopup isOpen={isOpen} onClose={onClose} setProfileImg={setProfileImg} />
    </Box>
  );
};

export default ProfileImage;
