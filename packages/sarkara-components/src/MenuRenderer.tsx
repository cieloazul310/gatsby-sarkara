import * as React from 'react';

export type Menu<T = Record<string, unknown>> = (MenuItem<T> | MenuGroup<T>)[];
export type MenuItem<T = Record<string, unknown>> = {
  title: string;
  path: string;
} & T;
export type MenuGroup<T = Record<string, unknown>> = {
  title: string;
  items: (MenuItem<T> | MenuGroup<T>)[];
};

export function isMenuItem<T = Record<string, unknown>>(
  item: MenuItem<T> | MenuGroup<T>
): item is MenuItem<T> {
  return Object.prototype.hasOwnProperty.call(item, 'path');
}

export type MenuGroupWrapperProps<T = Record<string, unknown>> = {
  children: React.ReactNode;
} & Partial<MenuGroup<T>>;

export type MenuRendererProps<T = Record<string, unknown>> = {
  menu: Menu<T>;
  menuItem: (item: MenuItem<T>) => React.ReactNode;
  MenuGroupWrapper: (props: MenuGroupWrapperProps<T>) => JSX.Element;
};

export function MenuRenderer<T = Record<string, unknown>>({
  menu,
  menuItem,
  MenuGroupWrapper,
}: MenuRendererProps<T>) {
  const renderer = React.useCallback(
    (item: MenuItem<T> | MenuGroup<T>) => {
      if (isMenuItem<T>(item)) return menuItem(item);
      return (
        <MenuGroupWrapper
          key={item.title}
          title={item.title}
          items={item.items}
        >
          {item.items.map((nestedItem) => renderer(nestedItem))}
        </MenuGroupWrapper>
      );
    },
    [menuItem, MenuGroupWrapper]
  );
  return <>{menu.map((item) => renderer(item))}</>;
}
