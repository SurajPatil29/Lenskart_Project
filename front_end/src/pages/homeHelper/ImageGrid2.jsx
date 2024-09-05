import React from 'react';
import { Grid, GridItem, Image } from '@chakra-ui/react';

function ImageGrid2({ data }) {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)" // 2 columns
      gap={4} // space between grid items
    >
      <GridItem>
        <Image src={data.image1} alt="Image 1" w="100%" h="100%" objectFit="cover" />
      </GridItem>
      <GridItem>
        <Image src={data.image2} alt="Image 2" w="100%" h="100%" objectFit="cover" />
      </GridItem>
      <GridItem>
        <Image src={data.image3} alt="Image 3" w="100%" h="100%" objectFit="cover" />
      </GridItem>
      <GridItem>
        <Image src={data.image4} alt="Image 4" w="100%" h="100%" objectFit="cover" />
      </GridItem>
    </Grid>
  );
}

export default ImageGrid2;
