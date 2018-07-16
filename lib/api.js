import fetch from 'isomorphic-unfetch';
import MOCK_CATEGORY_RESPONSE from '../_SCAFFOLD/categories';

// SECRET! -- should use process.env.YOUTUBE_API_KEY on client side
// not sure how to do this in nextjs yet
// could also set up a proxy api server
const key = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';
const baseUrl = 'https://www.googleapis.com/youtube/v3';

const mapSearchItemsToVideos = items =>
  items.map(item => {
    const { id: { videoId }, snippet } = item;
    const { title, description, thumbnails } = snippet;
    return {
      description,
      title,
      thumbnailUrl: thumbnails.default.url,
      id: videoId,
    };
  });

const mapItemToCategory = item => {
  const { id, snippet } = item;
  const { title } = snippet;
  return { id, title };
};

export const Youtube = {
  videos: {
    search(query, category, token) {
      const params = `key=${key}&part=snippet,id&type=video&maxResults=15`;
      let url = `${baseUrl}/search?${params}`;
      if (query) {
        url += `&q=${query}`;
      }
      if (token) {
        url += `&pageToken=${token}`;
      }
      return fetch(url)
        .then(res => res.json())
        .then(data => ({
          videos: mapSearchItemsToVideos(data.items),
          token: data.nextPageToken,
        }));
    },
  },
  categories: {
    get() {
      const url = `${baseUrl}/videoCategories?regionCode=US&part=snippet`;
      return fetch(url)
        .then(res => res.json())
        .then(res => res.items)
        .then(items => items.map(mapItemToCategory));
    },
  },
};
