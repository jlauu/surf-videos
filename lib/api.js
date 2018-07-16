import MOCK_SEARCH_RESPONSE from '../_SCAFFOLD/search';
import MOCK_CATEGORY_RESPONSE from '../_SCAFFOLD/categories';

// SECRET! -- should use process.env.YOUTUBE_API_KEY on client side
// not sure how to do this in nextjs yet
// could also set up a proxy api server
const key = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';
const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet,id&type=video&q=surf`;

export const Youtube = {
  videos: {
    search(query, category) {
      return Promise.resolve(MOCK_SEARCH_RESPONSE.items);
    },
  },
  categories: {
    get() {
      return Promise.resolve(MOCK_CATEGORY_RESPONSE);
    },
  },
};
