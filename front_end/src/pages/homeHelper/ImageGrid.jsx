import React from 'react';
import { Grid, GridItem, Image } from '@chakra-ui/react';

function ImageGrid({ data }) {
  return (
    <Grid
      templateAreas={`
        "image1 image2"
        "image1 image3"
        "image4 image5"
      `}
      gridTemplateRows="repeat(3, 1fr)"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={4}
    >
      <GridItem area="image1">
        <Image src={data.image1} alt="Image 1" w="100%" h="100%" objectFit="cover" />
      </GridItem>
      <GridItem area="image2">
        <Image src={data.image2} alt="Image 2" w="100%" h="100%" objectFit="cover" />
      </GridItem>
      <GridItem area="image3">
        <Image src={data.image3} alt="Image 3" w="100%" h="100%" objectFit="cover" />
      </GridItem>
      <GridItem area="image4">
        <Image src={data.image4} alt="Image 4" w="100%" h="100%" objectFit="cover" />
      </GridItem>
      <GridItem area="image5">
        <Image src={data.image5} alt="Image 5" w="100%" h="100%" objectFit="cover" />
      </GridItem>
    </Grid>
  );
}

export default ImageGrid;
