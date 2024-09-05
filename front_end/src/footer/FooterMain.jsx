import { Box } from '@chakra-ui/react'
import React from 'react'
import { Discription } from './footerHelper/Discription'
import { AboutDetails } from './footerHelper/AboutDetails'

function FooterMain() {
  return (
    <>
    <Box backgroundColor="#000042" color="white">
      <Discription />
      <AboutDetails />
    </Box>
    </>
  )
}

export {FooterMain}