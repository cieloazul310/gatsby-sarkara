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
import {
  Jumbotron,
  useContentMaxWidth,
  useSidebarWidth,
  usePrimaryToken,
} from '@cieloazul310/sarkara-components';
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
  disableDrawer?: boolean;
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
  disableDrawer = false,
}: BasicLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const fabDisplay = React.useMemo(() => {
    if (disableSidebar) return 'block';
    return ['block', 'block', 'none'];
  }, [disableSidebar]);
  const contentMaxWidth = useContentMaxWidth();
  const sidebarWidth = useSidebarWidth();

  const basicLayoutHeader = React.useMemo(() => {
    if (header) return header;
    return <Header title={title} />;
  }, [header, Header, title]);

  const basicLayoutJumbotron = React.useMemo(() => {
    if (jumbotron) return jumbotron;
    return (
      <Jumbotron
        title={title}
        description={description}
        height={jumbotronHeight}
      />
    );
  }, [jumbotron, Jumbotron, title, description, jumbotronHeight]);

  const basicLayoutFooter = React.useMemo(() => {
    if (footer) return footer;
    return <Footer title={title} />;
  }, [footer, Footer, title]);

  const basicLayoutDrawer = React.useMemo(() => {
    if (disableDrawer) return null;
    return (
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent title={title}>{drawerContents}</DrawerContent>
      </Drawer>
    );
  }, [disableDrawer, isOpen, onClose, btnRef, title, drawerContents]);

  const primary = usePrimaryToken();
  const basicLayoutButton = React.useMemo(() => {
    if (disableDrawer) return null;
    return (
      <IconButton
        colorScheme={primary}
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
    );
  }, [disableDrawer, primary, fabDisplay, onOpen, btnRef]);

  const basicLayourSidebar = React.useMemo(() => {
    if (disableSidebar) return null;
    return (
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
    );
  }, [disableSidebar, sidebarWidth, sidebarContents]);

  return (
    <>
      {basicLayoutHeader}
      {basicLayoutJumbotron}
      <Container display="flex" py={4} px={2} maxWidth={contentMaxWidth}>
        <VStack
          flexGrow={1}
          spacing={4}
          align="stretch"
          px={[0, 2]}
          maxWidth="100%"
        >
          {children}
        </VStack>
        {basicLayourSidebar}
      </Container>
      {basicLayoutButton}
      {basicLayoutDrawer}
      {basicLayoutFooter}
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
  disableDrawer: false,
};

export default BasicLayout;
