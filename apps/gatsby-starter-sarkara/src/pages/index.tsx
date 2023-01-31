import * as React from 'react';
import { Box, VStack, Heading, Text } from '@chakra-ui/react';

function IndexPage() {
  return (
    <VStack align="stretch" gap={2} px={2}>
      <Box bg="blue.50" rounded="xl" p={4}>
        <Heading as="h1" mb={2}>Gatsby Starter Sarkara</Heading>
        <Text>Chakra UI Extension</Text>
      </Box>
    </VStack>
  );
}

export default IndexPage;
