import * as React from 'react';

export type Menu<T extends object = Record<string, unknown>> = (
  | MenuItem<T>
  | MenuGroup<T>
)[];
export type MenuItem<T extends object = Record<string, unknown>> = {
  title: string;
  path: string;
} & T;
export type MenuGroup<T extends object = Record<string, unknown>> = {
  title: string;
  items: MenuItem<T>[];
};

export function isMenuItem<T extends object = Record<string, unknown>>(
  item: MenuItem<T> | MenuGroup<T>
): item is MenuItem<T> {
  return Object.prototype.hasOwnProperty.call(item, 'path');
}

export type MenuGroupWrapperProps<T extends object = Record<string, unknown>> =
  {
    children: React.ReactNode;
  } & Partial<MenuGroup<T>>;

export type MenuRendererProps<T extends object = Record<string, unknown>> = {
  menu: Menu<T>;
  menuItem: (item: MenuItem<T>) => React.ReactNode;
  MenuGroupWrapper: (props: MenuGroupWrapperProps<T>) => JSX.Element;
};

export function MenuRenderer<T extends object = Record<string, unknown>>({
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
          {item.items.map((nestedItem) => menuItem(nestedItem))}
        </MenuGroupWrapper>
      );
    },
    [menuItem, MenuGroupWrapper]
  );
  return <>{menu.map((item) => renderer(item))}</>;
}
