import React, { useRef, useEffect, useState } from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

function AutoSlider({ width, children }) {
  const scrollRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    // Set scroll amount based on the component's width
    const calculateScrollAmount = () => {
      if (scrollRef.current) {
        const visibleWidth = scrollRef.current.clientWidth;
        setScrollAmount(visibleWidth);
      }
    };

    calculateScrollAmount(); // Calculate initially

    // Recalculate scroll amount on window resize
    window.addEventListener('resize', calculateScrollAmount);
    return () => window.removeEventListener('resize', calculateScrollAmount);
  }, []);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll(scrollAmount);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [scrollAmount]);

  return (
    <Box w="100%" overflow="hidden" mx="auto">
      <Flex alignItems="center">
        <IconButton
          icon={<Text fontSize="2xl">&lt;</Text>}
          onClick={() => scroll(-scrollAmount)}
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
          onClick={() => scroll(scrollAmount)}
          aria-label="Scroll right"
          ml={2}
        />
      </Flex>
    </Box>
  );
}

export { AutoSlider };
