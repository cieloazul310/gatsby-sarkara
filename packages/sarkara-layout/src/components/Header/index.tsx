/* eslint react/jsx-props-no-spreading: warn */
import * as React from 'react';
import { Flex, type FlexProps } from '@chakra-ui/react';
import { useGradientBox } from '@cieloazul310/sarkara-components';

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
  height = '56px',
  px = 4,
  ...props
}: HeaderProps) {
  const { bgGradient, color } = useGradientBox();
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
      height={height}
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
  height: '56px',
  px: 4,
};

export default Header;
