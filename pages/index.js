import React from 'react';
import Page from '../layout/main';
import VideoCard from '../components/card';
import SearchBar from '../components/search';
import { Header, List, Loader, Visibility } from 'semantic-ui-react';
import { Youtube } from '../lib/api';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      loading: false,
      token: null,
      query: null,
      category: null,
    };
  }

  handleSubmit(query, category) {
    this.setState({ loading: true });
    Youtube.videos.search(query, category)
      .then(({ token, videos }) => {
        this.setState({
          category,
          query,
          token,
          videos,
          loading: false,
        });
      });
  }

  handleScroll = () => {
    const { query, category, token, loading } = this.state;
    if (loading) return;
    this.setState({ loading: true });
    Youtube.videos.search(query, category, token)
      .then(({ token, videos }) => {
        this.setState(prev => ({
          token,
          videos: [...prev.videos, ...videos],
          loading: false,
        }));
      });
  }

  render() {
    const { videos, loading, token } = this.state;
    const { categories } = this.props;
    return (
      <Page>
        <Header>Surf Videos!</Header>
        <SearchBar
          loading={loading}
          onSubmit={this.handleSubmit.bind(this)}
          categories={categories}
        />
        { videos && <List>
          {videos.map(video => (
            <VideoCard key={video.id} {...video}>
            </VideoCard>
          ))}
        </List>}
      { token &&
          <Visibility offset={[0,25]}
            onOnScreen={loading ? undefined : this.handleScroll}
            once={false}>
            <Loader active inline='centered' />
          </Visibility>}
      </Page>
    );
  }
}

HomePage.getInitialProps = async function() {
  const categories = await Youtube.categories.get()
    .then(items => items.map(item => ({
        key: item.id,
        text: item.title,
        value: item.id,
    })));
  return { categories };
}

export default HomePage;
