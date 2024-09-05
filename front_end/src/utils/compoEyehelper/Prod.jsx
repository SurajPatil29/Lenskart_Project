import React from 'react';
import { Box, Image, Text, Flex, VStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

function Prod({ data }) {
  return (
    <Link to={`/producte_E/${data._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
        {/* Image Section */}
        <Flex align="center" justify="center" mb={4}>
          <Image src={data.image} alt={data.title} objectFit="cover" boxSize="100%" />
        </Flex>

        {/* Rating and Review Section */}
        <Flex
          mb={4}
          p={2}
          borderWidth="1px"
          borderRadius="md"
          borderColor="gray.200"
          align="center"
          width="100px"
        >
          <Text mr={2}>{data.rating}</Text>
          <Text>
            <StarIcon color="#00BAC6" /> {data.review}
          </Text>
        </Flex>

        {/* Title and Size Section */}
        <VStack spacing={1} align="start" mb={4}>
          <Text fontSize="lg" fontWeight="bold" color="black">{data.title}</Text> {/* Color: dark black */}
          <Text color="gray.600">Size: {data.size}</Text> {/* Color: dark gray */}
          <Text color="gray.600">₹{data.price}</Text> {/* Color: dark gray */}
        </VStack>

        {/* Show Offers Section */}
        <Box
          mt={4}
          borderWidth="1px"
          borderRadius="md"
          borderColor="gray.200"
          p={2}
          bg="#F7F1DF"
        >
          <Text fontSize="sm" color="yellow.500">
            {data['show offers']}
          </Text>
        </Box>
      </Box>
    </Link>
  );
}

export { Prod };
