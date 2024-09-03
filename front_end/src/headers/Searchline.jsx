import React, { useState, useEffect } from 'react';
import { Flex, Image, Box, Text, Link as ChakraLink } from '@chakra-ui/react';
import Search from './Search';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function Searchline() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (e.g., token is present in local storage)
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem('accessToken');
    setIsAuthenticated(false);
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <Flex justifyContent="space-around" alignItems="center" mx="auto">
      {/* Logo Image */}
      <Image
        src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
        alt="Lenskart Logo"
        width={{ base: '100px', md: '250px' }}
      />

      {/* Toll-Free Number Image */}
      <Image
        src="https://static1.lenskart.com/media/desktop/img/republic/eye/new-toll-number.png"
        alt="Toll-Free Number"
        height="30px"
        display={{ base: 'none', md: 'block' }}
        width={{ md: '150px' }}
      />

      {/* Search Component */}
      <Box flex="1" mx={2} maxW={{ base: 'full', md: '400px' }}>
        <Search />
      </Box>

      {/* Wishlist Section */}
      <Flex alignItems="center" mx={2} display={{ base: 'none', md: 'flex' }} flexDirection="row" gap={2}>
        <ChakraLink as={RouterLink} to="/favourite" display="flex" alignItems="center" textDecoration="none">
          <Image
            src="https://www.svgrepo.com/show/13666/heart.svg"
            alt="Wishlist Icon"
            boxSize="20px"
          />
          <Text ml={2} fontSize="sm">Wishlist</Text>
        </ChakraLink>
      </Flex>
      <Flex alignItems="center" mx={2} display={{ base: 'flex', md: 'none' }}>
        <ChakraLink as={RouterLink} to="/favourite" textDecoration="none">
          <Image
            src="https://www.svgrepo.com/show/13666/heart.svg"
            alt="Wishlist Icon"
            boxSize="20px"
          />
        </ChakraLink>
      </Flex>

      {/* Cart Section */}
      <Flex alignItems="center" mx={2} display={{ base: 'none', md: 'flex' }} flexDirection="row" gap={2}>
        <ChakraLink as={RouterLink} to="/cart" display="flex" alignItems="center" textDecoration="none">
          <Image
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-2042683-1723164.png?f=webp&w=256"
            alt="Cart Icon"
            boxSize="20px"
          />
          <Text ml={2} fontSize="sm">Cart</Text>
        </ChakraLink>
      </Flex>
      <Flex alignItems="center" mx={2} display={{ base: 'flex', md: 'none' }}>
        <ChakraLink as={RouterLink} to="/cart" textDecoration="none">
          <Image
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/cart-2042683-1723164.png?f=webp&w=256"
            alt="Cart Icon"
            boxSize="20px"
          />
        </ChakraLink>
      </Flex>

      {/* Login/Logout Section */}
      <Flex alignItems="center" mx={2}>
        {isAuthenticated ? (
          <ChakraLink onClick={handleLogout} textDecoration="none" colorScheme="teal">
            Logout
          </ChakraLink>
        ) : (
          <ChakraLink as={RouterLink} to="/login" textDecoration="none" colorScheme="teal">
            Login
          </ChakraLink>
        )}
      </Flex>
    </Flex>
  );
}

export { Searchline };
