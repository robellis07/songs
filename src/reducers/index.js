import { combineReducers } from 'redux';

const songsReducer = () => {
  // this list is manually put in just to show as an example
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:39' },
    { title: 'All Star', duration: '3:15' },
    { title: 'Random Song', duration: '13:49' }
  ];
};

// reducer for selecting a specific song
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  // if action isn't in the list then just return the selected song
  return selectedSong;
};

// reducer for deleting a specific song
const deletedSongReducer = (deletedSong = null, action) => {
  if (action.type === 'SONG_DELETED') {
    return action.payload;
  }

  return deletedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  deletedSong: deletedSongReducer
});
