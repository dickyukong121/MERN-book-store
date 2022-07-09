import React from 'react';
import { Box, Badge } from '@chakra-ui/react';

const Book = ({ item, clickBook }) => {
  const { name, category, price } = item;
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mb={5}
      p={5}
      cursor="pointer"
      _hover={{ 
        fontWeight: 'semibold',
        background:'#0ABAB5'
     }}
      onClick={()=>clickBook(item)}
    >
      <Box display="flex" alignItems="baseline" p="6">
        <Badge borderRadius="full" px="2" colorScheme="teal">
          New
        </Badge>
        <Box ml={3}>{name}</Box>
      </Box>
      <Box p="6">{category}</Box>
      <Box p="6">${price}</Box>
    </Box>
  );
};
export default React.memo(Book);
