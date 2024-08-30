import React, { useRef } from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

function ManualSlider({children}) {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <Box w="100%" overflow="hidden">
      <Flex alignItems="center">
        <IconButton
          icon={<Text fontSize="2xl">&lt;</Text>}
          onClick={() => scroll(-200)}
          aria-label="Scroll left"
          mr={2}
        />
        <Box
          ref={scrollRef}
          w="100%"
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none', // IE and Edge
            scrollbarWidth: 'none', // Firefox
          }}
          whiteSpace="nowrap"
        >
          {children}
        </Box>
        <IconButton
          icon={<Text fontSize="2xl">&gt;</Text>}
          onClick={() => scroll(200)}
          aria-label="Scroll right"
          ml={2}
        />
      </Flex>
    </Box>
  );
}

export {ManualSlider};
