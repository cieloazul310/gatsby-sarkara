import type { Menu } from '@cieloazul310/sarkara-components';

const menu: Menu = [
  { title: 'Top Page', path: '/' },
  { title: 'Page 2', path: '/page-2' },
  {
    title: 'Link',
    items: [
      { title: 'GitHub', path: 'https://github.io/cieloazul310' },
      { title: 'Twitter', path: 'https://twitter.com/cieloazul310' },
    ],
  },
];

export default menu;
