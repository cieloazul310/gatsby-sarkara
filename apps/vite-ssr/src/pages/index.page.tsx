import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import { BasicLayout, Paper, PaperButton } from '@cieloazul310/sarkara';
import Article from '../mdx/article.mdx';
import mdxComponents from '../components/mdxComponents';

function Page() {
  return (
    <BasicLayout title="Vite SSR" disableSidebar disableDrawer>
      <Flex flexDirection={['column', 'row']} gap={2}>
        <PaperButton width={['100%', 1 / 3]} colorScheme="primary">
          Release Info
        </PaperButton>
        <PaperButton width={['100%', 1 / 3]} colorScheme="primary">
          Production
        </PaperButton>
        <PaperButton width={['100%', 1 / 3]} colorScheme="secondary">
          Buy
        </PaperButton>
      </Flex>
      <Paper as="article" id="info">
        <Article components={mdxComponents} />
      </Paper>
    </BasicLayout>
  );
}

export { Page };
