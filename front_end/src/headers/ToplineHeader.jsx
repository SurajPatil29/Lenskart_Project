import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

function ToplineHeader() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      wrap="nowrap"
      
      color="black"
    >
      {/* First group of links */}
      <Flex
        direction={{ base: 'row', sm: 'row', md: 'row', lg: 'row' }}
        gap={{ base: 1, sm: 1 }}
        fontSize="xs"
        fontWeight="normal"
        wrap="wrap"
        justifyContent={{ base: 'center', sm: 'start' }}
        alignItems="center"
        flexGrow={1}
        p={3}
      >
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Do More, Be More
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Tryin3D
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          StoreLocator
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Singapore
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          UAE
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          John Jacobs
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Aqualens
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Cobrowsing
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Engineering Block
        </Link>
        <Text>|</Text>
        <Link href="#" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Partner With Us
        </Link>
      </Flex>

      {/* Second group of links */}
      <Flex
      p={ 3}
      
      >
        <Link href="#" fontSize="xs" textDecoration="none" _hover={{ textDecoration: 'none' }} whiteSpace="nowrap">
          Contact Us
        </Link>
      </Flex>
    </Flex>
  );
}

export { ToplineHeader };
