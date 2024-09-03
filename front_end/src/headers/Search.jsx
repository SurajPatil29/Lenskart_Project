import React, { useState } from 'react';
import { Input, Button, InputGroup, InputRightElement, Box, useBreakpointValue } from '@chakra-ui/react';

function Search() {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState([]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example API call
      const response = await fetch(`https://lenskart-project.onrender.com/search/product?title=${input}`, {
        method: 'GET', // Use GET for search operations
        headers: {
          'Content-Type': 'application/json',
          "authentication" : localStorage.getItem(accessToken)
        },
      });

      // Check if the response is ok (status code in the range 200-299)
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setSearchData(data);
    } catch (error) {
      console.log(error)
      console.error('Error:', error);
    }
  };

  // Adjust input size based on the display size
  const inputSize = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (
    <Box maxWidth="500px" mx="auto">
      <form onSubmit={handleSubmit}>
        <InputGroup size={inputSize}>
          <Input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            pr="4.5rem" // Add padding-right to make space for the button
          />
          <InputRightElement>
            <Button
              type="submit"
              aria-label="Search"
              size={inputSize}
              borderRadius="md" // Rounded corners
            >
              🔍
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
}

export default Search;
