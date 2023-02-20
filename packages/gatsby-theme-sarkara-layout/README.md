# Gatsby Theme Sarkara Layout

Sarkara layout package for Gatsby.

## Install

```sh
npm install @cieloazul310/gatsby-theme-sarkara

// or indivisual
npm install @cieloazul310/gatsby-theme-sarkara-layout
```

### Peer dependencies (required)

- [react]
- [react-dom]
- [gatsby]
- [@chakra-ui/react]
- [@chakra-ui/icons]
- [@cieloazul310/gatsby-theme-sarkara-components]
- [@cieloazul310/sarkara-components]
- [@cieloazul310/sarkara-layout]
- [@emotion/react]
- [@emotion/styled]
- [framer-motion]

## Usage

```tsx
// src/pages/hoge.tsx
import { GatsbySarkaraLayout } from '@cieloazul310/gatsby-theme-sarkara';

function Page() {
  return (
    <GatsbySarkaraLayout>
      {contents}
    </GatsbySarkaraLayout>
  );
}
```

## Shadowing

Shadowing in Gatsby Themes  
<https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/>

```txt
src
├── @chakra-ui
│   └── gatsby-plugin
│       └── theme.ts
├── @cieloazul310
│   └── gatsby-theme-sarkara-layout
│       └── useMenu.tsx
└── pages
    ├── 404.tsx
    └── index.tsx
```

## API

### Layout

#### `<GatsbySarkaraLayout>`

### utils

#### `useMenu`

[react]: [https://reactjs.org/]
[react-dom]: https://reactjs.org/
[gatsby]: https://www.gatsbyjs.com/
[@chakra-ui/react]: https://chakra-ui.com/
[@chakra-ui/icons]: https://chakra-ui.com/
[@emotion/react]: https://emotion.sh/
[@emotion/styled]: https://emotion.sh/
[framer-motion]: https://www.framer.com/motion/
[@cieloazul310/sarkara-components]: ../sarkara-components/
[@cieloazul310/sarkara-layout]: ../sarkara-layout/
[@cieloazul310/gatsby-theme-sarkara-components]: ../gatsby-theme-sarkara-components/
