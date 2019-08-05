import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlayListsAction } from "../ducks/playlist";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylists() {
  try {
    const response = yield call(api.get, "/playlists");

    yield put(PlayListsAction.getPlayListSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError("Not able to get playlists"));
  }
}
