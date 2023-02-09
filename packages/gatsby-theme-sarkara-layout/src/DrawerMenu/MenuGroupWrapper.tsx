import * as React from 'react';
import { VStack } from '@chakra-ui/react';
import type { MenuGroupWrapperProps } from '@cieloazul310/sarkara-components';

function MenuGroupWrapper({ children }: MenuGroupWrapperProps) {
  return (
    <VStack spacing={2} align="stretch">
      {children}
    </VStack>
  );
}

export default MenuGroupWrapper;
