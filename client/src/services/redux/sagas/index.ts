import { all } from "redux-saga/effects";
import { watchSongsSagaAsync } from "./songSaga";

export function* rootSaga() {
  yield all([watchSongsSagaAsync()]);
}
