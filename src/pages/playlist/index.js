import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailCreators } from "../../store/ducks/playlistDetail";
import { Creators as PlayerActions } from "../../store/ducks/player";

import { Container, Header, SongList, SongItem } from "./styles";
import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";
import Loading from "../../components/Loading";

class Playlist extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number
      })
    }).isRequired,
    getPlayListDetailRequest: PropTypes.func.isRequired,
    playlistDetail: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    currentSong: PropTypes.shape({
      id: PropTypes.number
    }).isRequired
  };

  state = {
    selectedSong: null
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlayListDetailRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetail.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} musics</p>}

            <button>PLAY</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Title</th>
            <th>Artist</th>
            <th>Albumn</th>
            <th>
              <img src={ClockIcon} alt="Duration" />
            </th>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>No subscribed music</td>
              </tr>
            ) : (
                playlist.songs.map(song => (
                  <SongItem
                    key={song.id}
                    onClick={() => this.setState({ selectedSong: song.id })}
                    onDoubleClick={() => this.props.loadSong(song, playlist.songs)}
                    selected={this.state.selectedSong === song.id}
                    playing={
                      this.props.currentSong &&
                      this.props.currentSong.id === song.id
                    }
                  >
                    <td>
                      <img src={PlusIcon} alt="Add to playlist" />
                    </td>
                    <td>{song.title}</td>
                    <td>{song.author}</td>
                    <td>{song.album}</td>
                    <td>3:26</td>
                  </SongItem>
                ))
              )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetail.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
        this.renderDetails()
      );
  }
}

const mapStateToProps = state => ({
  playlistDetail: state.playlistDetail,
  currentSong: state.player.currentSong
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...PlaylistDetailCreators, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlist);
