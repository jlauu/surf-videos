import React from 'react';
import Page from '../layout/main';
import VideoCard from '../components/card';
import SearchBar from '../components/search';
import { Header, List } from 'semantic-ui-react';
import { Youtube } from '../lib/api';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
    };
  }

  handleSubmit(query, category) {
    this.setState(prev => ({...prev, loading: true}));
    Youtube.videos.search(query, category)
      .then(videos => {
        this.setState(prev => ({
          loading: false,
          videos: videos,
        }));
      });
  }

  render() {
    const { videos, loading } = this.state;
    return (
      <Page>
        <Header>Surf Videos!</Header>
        <SearchBar
          loading={loading}
          onSubmit={this.handleSubmit.bind(this)}
        />
        { !loading && <List>
          {videos.map(video => (
            <VideoCard key={video.id} {...video}>
            </VideoCard>
          ))}
        </List>}
      </Page>
    );
  }
}

export default HomePage;
