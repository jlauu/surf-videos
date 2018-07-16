import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default ({ children }) => (
  <div>
    <Head>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <div className="wrapper">
      <Container>
        { children }
      </Container>
    </div>
    <style jsx>{`
      .wrapper {
        padding-top: 5vh;
        padding-bottom: 5vh;
      }
    `}</style>
  </div>
);

