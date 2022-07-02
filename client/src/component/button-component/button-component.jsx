import React from 'react';
import { Button, Center, Container, Stack } from '@chakra-ui/react';

const ButtonComponent = React.memo(({ action }) => {
  return (
    <Container maxW={'container.sm'} pt={10}>
      <Stack spacing={3}>
        <Center pt={10}>
          <Button
            background={'#5433FF'}
            _hover={{ background: '#4379FF' }}
            color={'white'}
            onClick={action}
            width={200}
          >
            Back to Book List
          </Button>
        </Center>
      </Stack>
    </Container>
  );
});

export default ButtonComponent;
