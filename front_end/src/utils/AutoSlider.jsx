import React, { useRef, useEffect } from 'react';
import { Box, Flex, IconButton, Text, Stack, Image } from '@chakra-ui/react';

function AutoSlider({width, children}) {
  const scrollRef = useRef(null);
  const imageWidth = width; // Width of one image
  const scrollAmount = imageWidth;

  const calculateImageWidth = () => {
    const screenWidth = window.innerWidth;
    const desiredWidth = screenWidth * 0.9; 
    return desiredWidth;
  }

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      const maxScrollLeft = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
      if (scrollRef.current.scrollLeft + scrollOffset >= maxScrollLeft) {
        scrollRef.current.scrollLeft = maxScrollLeft;
        setTimeout(() => {
          scrollRef.current.scrollLeft = 0;
        }, 3000); // Small delay to ensure the last image is visible
      } else {
        scrollRef.current.scrollLeft += scrollOffset;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll(scrollAmount);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box w={`${imageWidth}px`} overflow="hidden" mx="auto">
      <Flex alignItems="center">
        <IconButton
          icon={<Text fontSize="2xl">&lt;</Text>}
          onClick={() => scroll(-scrollAmount)}
          aria-label="Scroll left"
          mr={2}
        />
        <Box
          ref={scrollRef}
          w={`${imageWidth}px`}
          overflowX="hidden"
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
          onClick={() => scroll(scrollAmount)}
          aria-label="Scroll right"
          ml={2}
        />
      </Flex>
    </Box>
  );
}

export { AutoSlider };
