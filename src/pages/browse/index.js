import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistCreators } from "../../store/ducks/playlist";

import Loading from "../../components/Loading";

import { Container, Title, List, Playlist } from "./styles";

class Browse extends React.Component {
  static propTypes = {
    getPlayListRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string
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
        <Title>Navigate {this.props.playlists.loading && <Loading />}</Title>
        <List>
          {this.props.playlists.data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
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
)(Browse);
