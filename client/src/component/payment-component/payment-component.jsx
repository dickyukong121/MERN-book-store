import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const PaymentComponent = ({ book }) => {
  const { name, category, price } = book;
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      cursor="pointer"
      fontWeight="semibold"
      _groupHover={{ color: 'tomato' }}
    >
      <Box p="6" fontSize={30}>
        You have selected:
      </Box>
      <Box p="6">
        {'Book Name'}
        <Box
          as="span"
          color={useColorModeValue('#aa0707b8', '#13fe8bad')}
          fontSize="sm"
          ml={1}
        >
          {name}
        </Box>
      </Box>
      <Box p="6">
        {'Categroy'}
        <Box
          as="span"
          color={useColorModeValue('#aa0707b8', '#13fe8bad')}
          fontSize="sm"
          ml={1}
        >
          {category}
        </Box>
      </Box>
      <Box p="6">
        {'Price'}
        <Box
          as="span"
          color={useColorModeValue('#aa0707b8', '#13fe8bad')}
          fontSize="sm"
          ml={1}
        >
          {price && `$${price}`}
        </Box>
      </Box>
    </Box>
  );
};
export default PaymentComponent;
