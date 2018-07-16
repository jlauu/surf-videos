import 'semantic-ui-css/components/embed.css';
import 'semantic-ui-css/components/header.css';
import 'semantic-ui-css/components/list.css';
import 'semantic-ui-css/themes/default/assets/fonts/icons.eot';
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff';
import 'semantic-ui-css/themes/default/assets/fonts/icons.woff2';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Container>
      { children }
    </Container>
  </div>
);

