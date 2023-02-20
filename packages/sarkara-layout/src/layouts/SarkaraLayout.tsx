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
  useContentMaxWidth,
  useSidebarWidth,
  usePrimaryToken,
} from '@cieloazul310/sarkara-components';
import { SarkaraDrawerContent } from '../components';

export type SarkaraLayoutProps = React.PropsWithChildren<{
  title: string;
  siteTitle?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  jumbotron?: React.ReactNode;
  sidebarContents?: React.ReactNode;
  drawerContents?: React.ReactNode;
  drawerFooterContents?: React.ReactNode;
  disableSidebar?: boolean;
  disableDrawer?: boolean;
  disableSidebarSticky?: boolean;
}>;

function SarkaraLayout({
  children,
  title,
  siteTitle,
  header,
  footer,
  jumbotron,
  sidebarContents,
  drawerContents,
  drawerFooterContents,
  disableSidebar = false,
  disableDrawer = false,
  disableSidebarSticky = false,
}: SarkaraLayoutProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const fabDisplay = React.useMemo(() => {
    if (disableSidebar) return 'block';
    return ['block', 'block', 'none'];
  }, [disableSidebar]);
  const primary = usePrimaryToken();
  const contentMaxWidth = useContentMaxWidth();
  const sidebarWidth = useSidebarWidth();

  const SarkaraLayoutDrawer = React.useMemo(() => {
    if (disableDrawer) return null;
    return (
      <Drawer
        placement="bottom"
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <SarkaraDrawerContent
          title={siteTitle ?? title}
          footerContents={drawerFooterContents}
          onClose={onClose}
        >
          {drawerContents}
        </SarkaraDrawerContent>
      </Drawer>
    );
  }, [
    disableDrawer,
    isOpen,
    onClose,
    btnRef,
    title,
    siteTitle,
    drawerContents,
  ]);

  const SarkaraLayoutButton = React.useMemo(() => {
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
    const maxHeight = !disableSidebarSticky
      ? 'calc(100vh - var(--chakra-sizes-header))'
      : undefined;
    return (
      <VStack
        spacing={4}
        align="stretch"
        width={sidebarWidth}
        display={['none', 'none', 'block']}
        px={2}
        pb={8}
        flexShrink={0}
        right={0}
        position="sticky"
        overflowY="auto"
        top="calc(var(--chakra-sizes-header) + 1rem)"
        maxHeight={maxHeight}
      >
        {sidebarContents}
      </VStack>
    );
  }, [disableSidebar, sidebarWidth, sidebarContents, disableSidebarSticky]);

  return (
    <>
      {header}
      {jumbotron}
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
      {SarkaraLayoutButton}
      {SarkaraLayoutDrawer}
      {footer}
    </>
  );
}

SarkaraLayout.defaultProps = {
  siteTitle: undefined,
  header: undefined,
  footer: undefined,
  jumbotron: undefined,
  sidebarContents: undefined,
  drawerContents: undefined,
  drawerFooterContents: undefined,
  disableSidebar: false,
  disableDrawer: false,
  disableSidebarSticky: false,
};

export default SarkaraLayout;
