import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
  console.log('song detail props', props);
  const { theSong, deleteSong } = props;
  console.log('song detail prop', { theSong });

  if (deleteSong) {
    return <div>Why delete {deleteSong.title}?</div>;
  }
  if (!theSong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {theSong.title}
        <br />
        Duration: {theSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    theSong: state.selectedSong,
    deleteSong: state.deletedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
