import { Header, Embed } from 'semantic-ui-react';
import Page from '../layout/main';

const WatchPage = ({ id }) => (
  <Page>
    <Header>Watch Video!</Header>
    <Embed id={id} source='youtube' />
  </Page>
);

WatchPage.getInitialProps = ({ query: { id }}) => ({ id });

export default WatchPage;
