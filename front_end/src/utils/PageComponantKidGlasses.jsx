import React from 'react'
import { ImageDisplay } from '../pages/homeHelper/ImageDisplay'
import { Box, Grid } from '@chakra-ui/react'
import { LeftSideK } from './compoKidshelper/LeftSideK'
import { RightSideK } from './compoKidshelper/RightSideK'

function PageComponantKidGlasses() {
  return (
    <>
    {/* Displaying a banner image */}
    <ImageDisplay imageUrl="https://static1.lenskart.com/media/desktop/img/h24/aug/Updated%2021%20aug/WEB%20eye-3.png" />

    {/* Create a responsive grid layout */}
    <Grid
      templateColumns={{ base: "1fr 2fr", md: "1fr 4fr", lg: "1fr 5fr" }} // Responsive columns
      gap={6}    // Space between grid columns
      p={4}      // Padding around the grid container
    >
      {/* Left side for filters */}
      <Box>
        <LeftSideK />
      </Box>

      {/* Right side for displaying products */}
      <Box
        borderWidth="1px"
        borderColor="gray.200"
        borderStyle="solid" // Default is "solid", but you can specify it if needed
        p={4}
      >
        <RightSideK />
      </Box>
    </Grid>
  </>
  )
}

export {PageComponantKidGlasses}