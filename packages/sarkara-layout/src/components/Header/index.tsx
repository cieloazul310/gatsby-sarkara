/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Flex, type FlexProps } from '@chakra-ui/react';
import {
  useGradientBox,
  useHeaderHeight,
} from '@cieloazul310/sarkara-components';

export type HeaderProps = FlexProps;

function Header({
  children,
  as = 'header',
  alignItems = 'center',
  justifyContent = ['center', 'start'],
  gap = 2,
  position = 'sticky',
  top = 0,
  left = 0,
  zIndex = 'sticky',
  px = 4,
  height,
  ...props
}: HeaderProps) {
  const { bgGradient, color } = useGradientBox();
  const headerHeight = useHeaderHeight();
  return (
    <Flex
      as={as}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      position={position}
      top={top}
      left={left}
      zIndex={zIndex}
      height={height ?? headerHeight}
      px={px}
      bgGradient={props.bgGradient ?? bgGradient}
      color={props.color ?? color}
      {...props}
    >
      {children}
    </Flex>
  );
}

Header.defaultProps = {
  as: 'header',
  alignItems: 'center',
  justifyContent: ['center', 'start'],
  gap: 2,
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 'sticky',
  px: 4,
  height: undefined,
};

export default Header;
