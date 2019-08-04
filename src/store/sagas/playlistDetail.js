import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlayListsDetailAction } from "../ducks/playlistDetail";

export function* getPlaylistDetail(action) {
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );

    yield put(PlayListsDetailAction.getPlayListDetailSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
