import Head from 'next/head';
import Link from 'next/link';
import Page from '../layout/main';
import VideoCard from '../components/card';
import { Header, List } from 'semantic-ui-react';
import { Youtube } from '../lib/api';

const HomePage = ({ videos }) => (
  <Page>
    <Header>Surf Videos!</Header>
    <List>
      {videos.map((v, i) => (
        <VideoCard key={v.id.videoId} id={v.id.videoId} {...v.snippet}>
        </VideoCard>
      ))}
    </List>
  </Page>
);


HomePage.getInitialProps = async function() {
  const videos = await Youtube.videos.search();
  return { videos };
}

export default HomePage;
