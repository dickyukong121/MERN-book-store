import React from 'react';
import { Button, Center, Stack } from '@chakra-ui/react';

const ButtonStack = React.memo(({ action }) => {
  return (
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
  );
});

export default ButtonStack;
