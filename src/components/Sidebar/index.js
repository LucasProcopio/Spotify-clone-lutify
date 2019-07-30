import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylistIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav>
        <li>
          <a href="">Navigate</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlaylistIcon} alt="Add Playlist" />
      New playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
