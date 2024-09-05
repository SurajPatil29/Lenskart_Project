import React from 'react';
import { Box, Heading, Text, Flex, Image, Divider } from '@chakra-ui/react';

function AboutDetails() {
    return (
        <>
            <Flex justifyContent="space-between" flexWrap= "wrap" mb={8} px={10}>
                <Box>
                    <Heading as="h3" size="md" mb={4}>Service</Heading>
                    <Text>Store Locator</Text>
                    <Text>Buying Guide</Text>
                    <Text>Frame Size</Text>
                </Box>

                <Box>
                    <Heading as="h3" size="md" mb={4}>About Us</Heading>
                    <Text>We Are Hiring</Text>
                    <Text>Refer And Earn</Text>
                    <Text>About us</Text>
                    <Text>Lenskart Coupons</Text>
                </Box>

                <Box>
                    <Heading as="h3" size="md" mb={4}>Help</Heading>
                    <Text>FAQ's</Text>
                </Box>

                <Box textAlign="center">
                    <Image src="https://static.lenskart.com/media/desktop/img/play-store.svg" alt="Play Store" mb={2} />
                    <Image src="https://static.lenskart.com/media/desktop/img/app-store.svg" alt="App Store" mb={4} />
                    <Text>Download Lenskart App to buy</Text>
                    <Text>Eyeglasses, Sunglasses, and Contact Lenses</Text>
                </Box>
            </Flex>

            <Divider borderColor="white" mb={4} />

            <Flex justifyContent="space-between" flexWrap= "wrap" alignItems="center">
                <Flex>
                    <Text mx={2}>T&C</Text>
                    <Text mx={2}>Privacy</Text>
                    <Text mx={2}>Disclaimer</Text>
                    <Text mx={2}>Vision 1.0.0</Text>
                </Flex>
                <Text mx={2}>||</Text>
                <Flex alignItems="center">
                    <Text mr={2}>Follow Us</Text>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVRrWsSblEFJgdkVIww3VdQvw88Y8BFaz2w&s" alt="Facebook Icon" boxSize="24px" mx={1} />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc80FjzA46UpfwvdjUS9drBACryD6yyLoAYw&s" alt="Instagram Icon" boxSize="24px" mx={1} />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBmcOg2Ay9y1Lz-d4RT6zlt0zBiOESgDMRw&s" alt="Twitter Icon" boxSize="24px" mx={1} />
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRal7k8togXEYtm7luR4fZcL0rsoc1NJqAo-Q&s" alt="Pinterest Icon" boxSize="24px" mx={1} />
                </Flex>
            </Flex>
        </>
    );
}

export { AboutDetails };
