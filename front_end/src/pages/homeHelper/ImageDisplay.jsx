import React from 'react';
import PropTypes from 'prop-types';
import { Image } from '@chakra-ui/react';

const ImageDisplay = ({ imageUrl, altText = 'Image' }) => {
    return (
        <Image
            src={imageUrl}
            alt={altText}
            maxW="100%"
            borderRadius="8px"
            objectFit="cover"
        />
    );
};

ImageDisplay.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    altText: PropTypes.string,
};

export { ImageDisplay }
