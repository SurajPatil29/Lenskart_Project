import React from 'react';
import { Box, Text, Button, Flex, Select, HStack, Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScreenGlasses, setScreenGlassesSort } from '../../redux/actions/screenGlassesAction';

function LeftSideS() {
  const dispatch = useDispatch();
  const { products, sort, page } = useSelector((state) => state.screenGlasses);
  const pagination = products.pagination;

  const handleSortChange = (e) => {
    const value = e.target.value;
    let sortField, sortOrder;

    switch (value) {
      case 'price-high-to-low':
        sortField = 'price';
        sortOrder = 'desc';
        break;
      case 'price-low-to-high':
        sortField = 'price';
        sortOrder = 'asc';
        break;
      case 'rating-high-to-low':
        sortField = 'rating';
        sortOrder = 'desc';
        break;
      case 'rating-low-to-high':
        sortField = 'rating';
        sortOrder = 'asc';
        break;
      default:
        sortField = 'price';
        sortOrder = 'asc';
        break;
    }

    dispatch(setScreenGlassesSort(sortField, sortOrder));
    dispatch(fetchScreenGlasses('products', sortField, sortOrder, page));
  };

  const handleCategoryFilter = (filter) => {
    dispatch(fetchScreenGlasses(filter, sort.sort, sort.order, page));
  };

  const handlePageChange = (newPage) => {
    dispatch(fetchScreenGlasses('products', sort.sort, sort.order, newPage));
  };

  const renderPagination = () => {
    const { currentPage, totalPages } = pagination;
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          isDisabled={i === currentPage}
          colorScheme={i === currentPage ? 'blue' : 'gray'}
        >
          {i}
        </Button>
      );
    }

    return (
      <HStack
        mt={4}
        spacing={2}
        maxW="270px"
        mx="auto"
        wrap="wrap"
        justify="center"
      >
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        {pages}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    );
  };

  return (
    <>
      <Box>
        <Text fontSize="lg" fontWeight="bold">FRAME TYPE</Text>
        <Flex justify="space-between" wrap="wrap">
          <Box textAlign="center" w="40px" onClick={() => handleCategoryFilter('fullrim')}>
          <Image src="https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png" alt="Full Rim" boxSize="40px" />

            <Text fontSize="x-small">Full Rim</Text>
          </Box>
          <Box textAlign="center" w="40px" onClick={() => handleCategoryFilter('halfrim')}>
          <Image src="https://static.lenskart.com/images/cust_mailer/Eyeglass/HalfRim.png" alt="Half Rim" boxSize="40px" />

            <Text fontSize="x-small">Half Rim</Text>
          </Box>
          <Box textAlign="center" w="40px" onClick={() => handleCategoryFilter('rimless')}>
          <Image src="https://static.lenskart.com/images/cust_mailer/Eyeglass/Rimless.png" alt="Rimless" boxSize="40px" />

            <Text fontSize="x-small">Rimless</Text>
          </Box>
        </Flex>
      </Box>

      <Box mt={8}>
        <Text fontSize="lg" fontWeight="bold">Types</Text>
        <Flex justify="space-between" wrap="wrap">
          <Button colorScheme="blue" onClick={() => handleCategoryFilter('mens')}>Mens</Button>
          <Button colorScheme="blue" onClick={() => handleCategoryFilter('womens')}>Womens</Button>
          <Button colorScheme="blue" onClick={() => handleCategoryFilter('kids')}>Kids</Button>
        </Flex>
      </Box>

      <Box mt={8}>
        <Select onChange={handleSortChange} placeholder="Sort by">
          <option value="price-high-to-low">Price: High to Low</option>
          <option value="price-low-to-high">Price: Low to High</option>
          <option value="rating-high-to-low">Rating: High to Low</option>
          <option value="rating-low-to-high">Rating: Low to High</option>
        </Select>
      </Box>

      {pagination && renderPagination()}
    </>
  );
}

export { LeftSideS };
