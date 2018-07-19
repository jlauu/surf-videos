import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import VideoCard from './card';

const renderVideos = videos => videos
  .map(video => (
    <Grid.Column key={video.id} stretched
      computer={4} tablet={8} mobile={16}>
      <Segment className="column">
        <VideoCard {...video}></VideoCard>
      </Segment>
    </Grid.Column>
  ));

const VideoResults = ({ videos }) => (
  <div className='results'>
    <Grid className="result-grid" stackable>
      {renderVideos(videos)}
    </Grid>
    <style jsx global>{`
      .results :global(.result-grid) {
        padding-top: 10px;
      }
    `}</style>
  </div>
);

export default VideoResults;
