import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistCreators } from "../../store/ducks/playlist";

import { Container, NewPlaylist, Nav } from "./styles";

import Loading from "../Loading";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

class Sidebar extends React.Component {
  static propTypes = {
    getPlayListRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlayListRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navigate</Link>
            </li>
            <li>
              <a href="">Radio</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>YOUR LIBRARY</span>
            </li>
            <li>
              <a href="">Your daily mix</a>
            </li>
            <li>
              <a href="">Played recently</a>
            </li>
            <li>
              <a href="">Musics</a>
            </li>
            <li>
              <a href="">Albums</a>
            </li>
            <li>
              <a href="">Artists</a>
            </li>
            <li>
              <a href="">Stations</a>
            </li>
            <li>
              <a href="">Local files</a>
            </li>
            <li>
              <a href="">Videos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Add Playlist" />
          New playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
