import { Header, Container } from 'semantic-ui-react';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='/_next/static/style.css' />
    </Head>
    <Header>Hello World!</Header>
  </div>
);
