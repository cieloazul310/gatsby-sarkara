/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import {
  Spacer,
  VStack,
  Button,
  IconButton,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent as ChakraDrawerContent,
  DrawerCloseButton,
  useColorMode,
  type DrawerContentProps as ChakraDrawerContentProps,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export type SarkaraDrawerContentProps = React.PropsWithChildren<{
  title: string;
  onClose: () => void;
  footerContents?: React.ReactNode;
}> &
  ChakraDrawerContentProps;

function SarkaraDrawerContent({
  title,
  children,
  onClose,
  footerContents,
  maxHeight = ['75vh', '75vh', '100vh'],
  ...props
}: SarkaraDrawerContentProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraDrawerContent maxHeight={maxHeight} {...props}>
      <DrawerCloseButton />
      <DrawerHeader>{title}</DrawerHeader>
      <DrawerBody>
        <VStack spacing={2} align="stretch" as="nav">
          {children}
        </VStack>
      </DrawerBody>
      <DrawerFooter>
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          aria-label="toggle color mode"
        />
        <Spacer />
        {footerContents}
        <Button onClick={onClose}>Close</Button>
      </DrawerFooter>
    </ChakraDrawerContent>
  );
}

SarkaraDrawerContent.defaultProps = {
  footerContents: undefined,
};

export default SarkaraDrawerContent;
