// action creator
export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
export const deleteSong = song => {
  return {
    type: 'SONG_DELETED',
    payload: song
  };
};
