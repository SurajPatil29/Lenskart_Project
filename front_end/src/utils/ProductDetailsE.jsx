import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Flex, Button, VStack, Spinner } from '@chakra-ui/react';
import { StarIcon, AddIcon } from '@chakra-ui/icons'; // Check for available icons
import { Loadinghandling } from '../loading&error/Loadinghandling';
import { ErrorHandler } from '../loading&error/Errorhandling';

function ProductDetailsE() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingAddToCart, setLoadingAddToCart] = useState(false);
  const [loadingAddToFavorite, setLoadingAddToFavorite] = useState(false);
  const [errorAddToCart, setErrorAddToCart] = useState(null);
  const [errorAddToFavorite, setErrorAddToFavorite] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            authentication: `Bearer ${token}`,
          },
        };
        setLoading(true);
        const response = await fetch(`https://lenskart-project.onrender.com/eyeGlasses/product/${id}`, config);
        if (!response.ok) {
          throw new Error('Failed to fetch product details.');
        }
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      setLoadingAddToCart(true);
      const token = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("id");
      const response = await fetch('https://lenskart-project.onrender.com/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authentication: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id, userId: userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart.');
      }

      alert('Product added to cart successfully.');
    } catch (error) {
      setErrorAddToCart(error.message);
    } finally {
      setLoadingAddToCart(false);
    }
  };

  const handleAddToFavorite = async () => {
    try {
      setLoadingAddToFavorite(true);
      const token = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("id");
      const response = await fetch('https://lenskart-project.onrender.com/favourite/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authentication: `Bearer ${token}`,
        },
        body: JSON.stringify({ productId: id, userId: userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to favorites.');
      }

      alert('Product added to favorites successfully.');
    } catch (error) {
      setErrorAddToFavorite(error.message);
    } finally {
      setLoadingAddToFavorite(false);
    }
  };

  if (loading) return <Loadinghandling />;
  if (error) return <ErrorHandler error={error} onClose={() => setError(null)} />;

  return (
    <Flex p={4} direction={{ base: 'column', md: 'row' }} gap={4}>
      {/* Image Section */}
      <Box flex="1" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md">
        <Image src={product?.image} alt={product?.title} objectFit="cover" />
      </Box>

      {/* Details Section */}
      <Box flex="2" p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white">
        <Text fontSize="2xl" fontWeight="bold" mb={2}>{product?.title}</Text>

        <Flex mb={2} p={2} borderWidth="1px" borderRadius="md" borderColor="gray.200" align="center">
          <Text mr={2} fontSize="lg">{product?.rating}</Text>
          <StarIcon color="#00BAC6" />
          <Text ml={2}>{product?.review} reviews</Text>
        </Flex>

        <Text fontSize="xl" fontWeight="bold" color="green.500" mb={2}>₹{product?.price}</Text>
        <Text mb={2}><b>Type:</b> {product?.type}</Text>
        <Text mb={2}><b>Frame Type:</b> {product?.['Frame-type']}</Text>

        <Box p={3} borderWidth="1px" borderRadius="md" borderColor="gray.200" mb={4} bg="#F7F1DF">
          <Text fontWeight="bold" mb={2}>Technical Information:</Text>
          <Text mb={1}><b>Product ID:</b> {product?.technical_information?.['Product id']}</Text>
          <Text mb={1}><b>Model No.:</b> {product?.technical_information?.['Model No.']}</Text>
          <Text mb={1}><b>Frame Size:</b> {product?.technical_information?.['Frame Size']}</Text>
          <Text mb={1}><b>Frame Width:</b> {product?.technical_information?.['Frame Width']}</Text>
          <Text mb={1}><b>Frame Dimensions:</b> {product?.technical_information?.['Frame Dimensions']}</Text>
        </Box>

        <Text mb={4}>{product?.description}</Text>
        <Text fontWeight="bold" color="yellow.500" bg="#F7F1DF" p={3} borderRadius="md">
          {product?.['show offers']}
        </Text>
      </Box>

      {/* Action Buttons Section */}
      <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" bg="white" flexShrink={0}>
        <VStack spacing={4}>
          <Button
            colorScheme="red"
            leftIcon={loadingAddToFavorite ? <Spinner size="sm" /> : null}
            onClick={handleAddToFavorite}
            isLoading={loadingAddToFavorite}
            loadingText="Adding to Favorites"
            variant="outline"
          >
            Add to Favorites
          </Button>

          <Button
            colorScheme="teal"
            leftIcon={loadingAddToCart ? <Spinner size="sm" /> : null}
            onClick={handleAddToCart}
            isLoading={loadingAddToCart}
            loadingText="Adding to Cart"
            variant="outline"
          >
            Add to Cart
          </Button>

          <Button
            colorScheme="blue"
            leftIcon={<AddIcon />}
            as="a"
            href={`/buy_product/${id}`}  
            variant="outline"
          >
            Buy Product
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
}

export { ProductDetailsE };
