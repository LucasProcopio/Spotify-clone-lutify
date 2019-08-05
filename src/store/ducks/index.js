import { combineReducers } from "redux";
import playlists from "./playlist";
import playlistDetail from "./playlistDetail";
import error from "./error";

export default combineReducers({
  playlists,
  playlistDetail,
  error
});
