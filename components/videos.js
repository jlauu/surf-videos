import React from 'react';
import { List } from 'semantic-ui-react';
import VideoCard from './card';

const renderVideos = videos => videos
  .map(video => (
    <VideoCard key={video.id} {...video}></VideoCard>
  ));

const VideoResults = ({ videos }) => (
  <List>{renderVideos(videos)}</List>);

export default VideoResults;
