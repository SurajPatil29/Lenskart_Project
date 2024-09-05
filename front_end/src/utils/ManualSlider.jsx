import React, { useRef } from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

function ManualSlider({ children }) {
  const scrollRef = useRef(null);
  const itemWidth = 300; // Width of each item
  const itemsToShow = 4; // Number of items to show at a time

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset * itemWidth;
    }
  };

  return (
    <Box w="100%" overflow="hidden">
      <Flex alignItems="center">
        <IconButton
          icon={<Text fontSize="2xl">&lt;</Text>}
          onClick={() => scroll(-itemsToShow)}
          aria-label="Scroll left"
          mr={2}
        />
        <Box
          ref={scrollRef}
          display="flex"
          overflowX="auto"
          whiteSpace="nowrap"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none', // IE and Edge
            scrollbarWidth: 'none', // Firefox
          }}
        >
          {children}
        </Box>
        <IconButton
          icon={<Text fontSize="2xl">&gt;</Text>}
          onClick={() => scroll(itemsToShow)}
          aria-label="Scroll right"
          ml={2}
        />
      </Flex>
    </Box>
  );
}

export { ManualSlider };
