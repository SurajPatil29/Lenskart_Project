import React from 'react';
import { ManualSlider } from '../../utils/ManualSlider';
import { Box, Button, Image, Text, HStack } from '@chakra-ui/react';

function WearTrand({ data }) {

    const customFontStyles = {
        wareThe: {
            fontFamily: "'Lucida Console', monospace",
            fontSize: "4xl",

        },
        trend: {
            fontFamily: "'Times New Roman', serif",
            fontSize: "4xl",

        },
        collection: {
            fontFamily: "'Arial', sans-serif",
            fontSize: "sm",
        },
    }
    return (
        <Box px={20} display="flex">
            <Box mb={4} width="250px">
                <Text sx={customFontStyles.wareThe}>WARE THE</Text>
                <Text sx={customFontStyles.trend}>TREND</Text>
                <Text sx={customFontStyles.collection}>Our hottest collection</Text>
            </Box>
            <ManualSlider>
                <Box mx={20} display="flex" justifyContent="center" width="">

                    <HStack spacing={4} px={4}>
                        {data.map((item, index) => (
                            <Box
                                key={index}
                                width="200px" // Ensure width matches the itemWidth in ManualSlider
                                textAlign="center"
                            >
                                <Image src={item.image} alt={item.title} width="100%" />
                                <Box whiteSpace="wrap">
                                    <Text fontSize='xl' isTruncated maxWidth="300px">{item.title}</Text>
                                    <Button backgroundColor="#56C3BF" color="white" fontFamily="'Lucida Console', monospace">
                                        {item.button}
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </HStack>
                </Box>
            </ManualSlider>
        </Box>

    );
}

export default WearTrand;
