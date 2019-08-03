import React from "react";

import { Container, Header, SongList } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";
const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWl-_NZmUlu_R_lQbKDsMxUEKC6qvrlIJOiHrWjQbStlfE5lXYAg"
        alt="Player"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Rock forever</h1>
        <p>13 musics</p>

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
        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Papercut</td>
          <td>Linking Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Papercut</td>
          <td>Linking Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Papercut</td>
          <td>Linking Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>

        <tr>
          <td>
            <img src={PlusIcon} alt="Add to playlist" />
          </td>
          <td>Papercut</td>
          <td>Linking Park</td>
          <td>Hybrid Theory</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
