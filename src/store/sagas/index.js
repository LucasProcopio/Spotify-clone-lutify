import { all, takeLatest } from "redux-saga/effects";

import { Types as PlaylistTypes } from "../ducks/playlist";
import { Types as PlaylistDetailTypes } from "../ducks/playlistDetail";

import { getPlaylists } from "./playlists";
import { getPlaylistDetail } from "./playlistDetail";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailTypes.GET_REQUEST, getPlaylistDetail)
  ]);
}
