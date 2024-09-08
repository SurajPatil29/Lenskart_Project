import React, { useState, useEffect } from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import { Loadinghandling } from '../loading&error/Loadinghandling';
import { ErrorHandler } from '../loading&error/Errorhandling';
import { ProdS } from '../utils/compoScreenhelper/ProdS';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      const userId = localStorage.getItem('id'); // Retrieve user ID from local storage
      if (!userId) {
        setError('User ID not found');
        setLoading(false);
        return;
      }
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          authentication: `Bearer ${token}`,
        },
      };
      try {
        const response = await fetch(`https://lenskart-project.onrender.com/cart/${userId}`, config);
        if (!response.ok) throw new Error('Failed to fetch cart data');
        const data = await response.json();
        setCartItems(data.products);
        console.log(response) // Assuming the API returns { products: [...] }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, []);

  return (
    <Box p={6}>
      {loading && <Loadinghandling />}
      {error && <ErrorHandler error={error} onClose={() => setError(null)} />}
      
      {!loading && !error && (
        <>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Your Cart</Text>
          {/* <Grid 
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))" // Responsive grid
            gap={6} // Space between grid items
          >
            {cartItems.length ? (
              cartItems.map((item, i) => (
                <ProdS key={i} data={item} />
              ))
            ) : (
              <Text>No items in your cart</Text>
            )}
          </Grid> */}
        </>
      )}
    </Box>
  );
}

export { Cart };
