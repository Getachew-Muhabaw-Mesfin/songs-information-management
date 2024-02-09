import {
  getSongsAPI,
  getSongByIdAPI,
  createSongAPI,
  updateSongAPI,
  deleteSongAPI,
} from "../../api/index";
import { put, takeEvery } from "redux-saga/effects";
import {
  getSongsSlice,
  createSongSlice,
  updateSongSlice,
  deleteSongSlice,
} from "../slice/songs";
import { setSongSlice } from "../slice/song";
import {
  CREATE_SONG,
  GET_SONGS,
  GET_SONG_BY_ID,
  UPDATE_SONG_BY_ID,
  DELETE_SONG_BY_ID,
} from "../types";

interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
  // Add any other properties if needed
}

export function* getSongsSaga(): Generator {
  try {
    const songs = yield getSongsAPI();
    yield put(getSongsSlice(songs));
  } catch (error) {
    console.log(error);
  }
}
//get songsByIdSaga

export function* getSongSaga(id: string): Generator {
  try {
    const song = yield getSongByIdAPI(id);
    yield put(setSongSlice(song));
  } catch (error) {
    console.log(error);
  }
}

export function* createSongSaga(song: Song): Generator {
  try {
    const newSong = yield createSongAPI(song);
    yield put(createSongSlice(newSong));
  } catch (error) {
    console.log(error);
  }
}

export function* updateSongSaga(song: Song,id: string, ): Generator {
  try {
    const updatedSong = yield updateSongAPI(id, song);
    yield put(updateSongSlice(updatedSong));
  } catch (error) {
    console.log(error);
  }
}

export function* deleteSongSaga(id: string): Generator {
  try {
    yield deleteSongAPI(id);
    yield put(deleteSongSlice(id));
  } catch (error) {
    console.log(error);
  }
}


// export function* watchGetSongsSaga() {
//   yield takeEvery(GET_SONGS, getSongsSaga);
// }

// export function* watchGetSongSaga() {
//   yield takeEvery(GET_SONG_BY_ID, getSongSaga);
// }

// export function* watchCreateSongSaga() {
//   yield takeEvery(CREATE_SONG, createSongSaga);
// }

// export function* watchUpdateSongSaga() {
//   yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga);
// }

// export function* watchDeleteSongSaga() {
//   yield takeEvery(DELETE_SONG_BY_ID, deleteSongSaga);
// }

type Params = { id: string; song: Song };
export function* watchSongsAsync() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(GET_SONG_BY_ID, getSongSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga);
  yield takeEvery(DELETE_SONG_BY_ID, deleteSongSaga);
}