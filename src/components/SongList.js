import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong, deleteSong } from '../actions';

class SongList extends Component {
  onSelect(song) {
    this.props.selectSong(song);
    this.props.deleteSong(null);
  }

  onDelete(song) {
    this.props.deleteSong(song);
  }

  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button" onClick={() => this.onDelete(song)}>
              Delete
            </button>
          </div>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.onSelect(song)}
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong: selectSong,
  deleteSong: deleteSong
})(SongList);
