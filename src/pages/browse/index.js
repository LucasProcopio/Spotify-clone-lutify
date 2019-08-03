import React from "react";
import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navigate</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWl-_NZmUlu_R_lQbKDsMxUEKC6qvrlIJOiHrWjQbStlfE5lXYAg"
          alt="Player"
        />
        <strong>The best of Rock</strong>
        <p>
          Relax while you are programming by listening the best songs for you
        </p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWl-_NZmUlu_R_lQbKDsMxUEKC6qvrlIJOiHrWjQbStlfE5lXYAg"
          alt="Player"
        />
        <strong>The best of Rock</strong>
        <p>
          Relax while you are programming by listening the best songs for you
        </p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWl-_NZmUlu_R_lQbKDsMxUEKC6qvrlIJOiHrWjQbStlfE5lXYAg"
          alt="Player"
        />
        <strong>The best of Rock</strong>
        <p>
          Relax while you are programming by listening the best songs for you
        </p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWl-_NZmUlu_R_lQbKDsMxUEKC6qvrlIJOiHrWjQbStlfE5lXYAg"
          alt="Player"
        />
        <strong>The best of Rock</strong>
        <p>
          Relax while you are programming by listening the best songs for you
        </p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
