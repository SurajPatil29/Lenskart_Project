import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

function HappyCustomers({ data }) {
  return (
    <Box backgroundColor="#FFF092" padding={5}>
      <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" textAlign="center" mb={5}>
        {data?.row || "Default Title"}
      </Text>
      <Flex 
        justify="center" 
        align="center" 
        gap={4} 
        wrap="wrap"
        direction={{ base: "column", md: "row" }} // Column layout on smaller screens, row on larger screens
      >
        {data?.videoLink && data.videoLink.length > 0 ? (
          data.videoLink.map((videoItem, index) => (
            <Box
              key={index}
              dangerouslySetInnerHTML={{ __html: videoItem.video }}
              width={{ base: "100%", md: "400px", lg: "360px" }} // Adjust width for different screen sizes
              maxWidth="100%"
              overflow="hidden"
              mb={{ base: 4, md: 0 }} // Adds spacing at the bottom on smaller screens
            />
          ))
        ) : (
          <Text>No videos available</Text>
        )}
      </Flex>
    </Box>
  );
}

export default HappyCustomers;
