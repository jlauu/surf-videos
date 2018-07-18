import React from 'react';
import { Header, Loader, Visibility } from 'semantic-ui-react';
import Page from '../layout/main';
import VideoResults from '../components/videos';
import VideoCard from '../components/card';
import SearchBar from '../components/search';
import { Youtube } from '../lib/api';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
      loading: false,
      query: null,
      token: null,
      videos: [],
    };
  }

  handleSubmit = (query, category) => {
    this.setState({ loading: true });
    console.log('hanldeSubmit')
    const prom = Youtube.videos.search(query, category);
    console.log(prom);
      prom.then(({ token, videos }) => {
        console.log('aaaaaa', token, videos);
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
          ...prev,
          token,
          videos: [...prev.videos, ...videos],
          loading: false,
        }));
      });
  }

  render() {
    const { handleSubmit, handleScroll, state, props } = this;
    const { videos, loading, token } = state;
    const { categories } = props;
    return (
      <Page>
        <Header>Surf Videos!</Header>
        <SearchBar
          loading={loading}
          onSubmit={handleSubmit}
          categories={categories}
        />
        { videos && <VideoResults videos={videos}></VideoResults> }
      { token &&
          <Visibility offset={[0,25]}
            onOnScreen={loading ? undefined : handleScroll}
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
};

export default HomePage;
