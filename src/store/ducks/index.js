import { combineReducers } from "redux";
import playlists from "./playlist";
import playlistDetail from "./playlistDetail";

export default combineReducers({
  playlists,
  playlistDetail
});
