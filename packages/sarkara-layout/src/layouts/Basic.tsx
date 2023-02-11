import * as React from 'react';
import {
  Container,
  VStack,
  IconButton,
  Drawer,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Jumbotron, useSidebarWidth } from '@cieloazul310/sarkara-components';
import { Header, Footer, DrawerContent } from '../components';

export type BasicLayoutProps = React.PropsWithChildren<{
  title: string;
  description?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  jumbotron?: React.ReactNode;
  jumbotronHeight?: number;
  sidebarContents?: React.ReactNode;
  drawerContents?: React.ReactNode;
  disableSidebar?: boolean;
}>;

function BasicLayout({
  children,
  title,
  description,
  header,
  footer,
  jumbotron,
  jumbotronHeight,
  sidebarContents,
  drawerContents,
  disableSidebar = false,
}: BasicLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const fabDisplay = React.useMemo(() => {
    if (disableSidebar) return 'block';
    return ['block', 'block', 'none'];
  }, [disableSidebar]);
  const sidebarWidth = useSidebarWidth();

  return (
    <>
      {header ?? <Header />}
      {jumbotron ?? (
        <Jumbotron
          title={title}
          description={description}
          height={jumbotronHeight}
        />
      )}
      <Container display="flex" py={4} px={2} maxWidth="container.xl">
        <VStack
          flexGrow={1}
          spacing={4}
          align="stretch"
          px={[0, 2]}
          maxWidth="100%"
        >
          {children}
        </VStack>
        {!disableSidebar ? (
          <VStack
            spacing={4}
            align="stretch"
            width={sidebarWidth}
            display={['none', 'none', 'block']}
            px={2}
            pb={8}
            flexShrink={0}
            position="sticky"
            overflowY="auto"
            top="calc(var(--chakra-sizes-header) + 1rem)"
            right={0}
          >
            {sidebarContents}
          </VStack>
        ) : null}
      </Container>
      <IconButton
        colorScheme="primary"
        icon={<HamburgerIcon />}
        size="lg"
        aria-label="Menu"
        display={fabDisplay}
        position="fixed"
        bottom={4}
        right={4}
        zIndex="sticky"
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent title={title}>{drawerContents}</DrawerContent>
      </Drawer>
      {footer ?? <Footer />}
    </>
  );
}

BasicLayout.defaultProps = {
  description: undefined,
  header: undefined,
  footer: undefined,
  jumbotron: undefined,
  jumbotronHeight: undefined,
  sidebarContents: undefined,
  drawerContents: undefined,
  disableSidebar: false,
};

export default BasicLayout;
