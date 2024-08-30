import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { ManualSlider } from '../../utils/ManualSlider';

function Navblinks() {
  const links = [
    { to: "/eye_glasses", label: "EYEGLASSES" },
    { to: "/screen_glasses", label: "SCREEN GLASSES" },
    { to: "/kids_glasses", label: "KIDS GLASSES" },
    { to: "/contact_lenses", label: "CONTACT LENSES" },
    { to: "/sun_glasses", label: "SUNGLASSES" },
    { to: "/home_eye_test", label: "HOME EYE-TEST" },
    { to: "/store_locator", label: "STORE LOCATOR" }
  ];

  // Determine if we should use a slider or regular navbar based on screen width
  const isSlider = useBreakpointValue({ base: true, md: true, lg: true, xl: false });
  const fontSize = useBreakpointValue({ base: '12px', md: '14px', lg: '16px' });
  const imageSize = useBreakpointValue({ base: '50px', md: '60px', lg: '80px' });

  return (
    <Flex
      as="nav"
      bg="gray.100" // Background color faint grey
      alignItems="center"
      justifyContent="space-between"
      overflowX="hidden"
      px={4}
    >
      {isSlider ? (
        <ManualSlider>
          {links.map((obj, index) => (
            <Box
              key={index}
              as={Link}
              to={obj.to}
              mx="2" // Padding on left and right
              py="2" // Padding on top and bottom
              display="inline-block" // Ensure the links stay in a row
              _hover={{
                borderBottom: '2px solid black', // Bottom border on hover
                color: 'black' // Dark black text color on hover
              }}
              borderBottom="2px solid transparent" // Initial bottom border
              color="gray.700" // Initial text color
              fontSize={fontSize}
            >
              {obj.label}
            </Box>
          ))}
        </ManualSlider>
      ) : (
        <Flex
          display="flex"
          alignItems="center"
          flexGrow={1}
          // justifyContent="space-between"
        >
          {links.map((obj, index) => (
            <Box
              key={index}
              as={Link}
              to={obj.to}
              mx="2" // Padding on left and right
              py="2" // Padding on top and bottom
              _hover={{
                borderBottom: '2px solid black', // Bottom border on hover
                color: 'black' // Dark black text color on hover
              }}
              borderBottom="2px solid transparent" // Initial bottom border
              color="gray.700" // Initial text color
              fontSize={fontSize}
            >
              {obj.label}
            </Box>
          ))}
        </Flex>
      )}
      <Box display="flex" gap="2" alignItems="center" px="6"> {/* Images container */}
        <img
          src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
          alt="3D Try On"
          width={imageSize}
          height={imageSize}
          style={{ borderRadius: '5px' }}
        />
        <img
          src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
          alt="Blu Logo"
          width={imageSize}
          height={imageSize}
          style={{ borderRadius: '5px' }}
        />
        <img
          src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"
          alt="Gold Max Logo"
          width={imageSize}
          height={imageSize}
          style={{ borderRadius: '5px' }}
        />
      </Box>
    </Flex>
  );
}

export { Navblinks };
