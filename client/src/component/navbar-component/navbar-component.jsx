import React from 'react';

import {
  Box,
  Button,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  Spacer,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f5a8a840', '#3636a280')}
      style={{ backdropFilter: 'blur(20px)' }}
      zIndex={1}
      mb={10}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* Button to Homepage */}
        <Heading as="h1" size="lg">
          <LinkBox>
            <LinkOverlay href="/">Book Store</LinkOverlay>
          </LinkBox>
        </Heading>
        <Spacer />
        {/* Color Mode Switch */}
        <Box display="flex" ml={100} align="left">
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
