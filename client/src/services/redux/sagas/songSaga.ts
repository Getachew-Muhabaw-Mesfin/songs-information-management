import { call, put, takeEvery } from "redux-saga/effects";
import {
  getSongsAPI,
  createSongAPI,
  updateSongAPI,
  deleteSongAPI,
} from "../../api";
import {
  getSongsSlice,
  createSongSlice,
  updateSongSlice,
  deleteSongSlice,
} from "../slice/songsSlice";

import {
  GET_SONGS,
  CREATE_SONG,
  UPDATE_SONG_BY_ID,
  DELETE_SONG_BY_ID,
} from "../types";
import { AxiosResponse } from "axios";
interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}


export function* getSongsSaga(): Generator<unknown, void, AxiosResponse<any>> {
  try {
    const songs: AxiosResponse<any> = yield call(getSongsAPI);
    yield put(getSongsSlice(songs.data));
  } catch (error) {
    console.error("Error fetching songs:", error);
  }
}

// Worker Saga for fetching all songs
export function* handleGetSongs() {
  try {
    const response: AxiosResponse<Song[]> = yield call(getSongsAPI);
    yield put(getSongsSlice(response.data));
    console.log("Testing Get songs...", response.data);
  } catch (error) {
    // Handle error
    console.error("Error fetching songs:", error);
  }
}

// Worker Saga for creating a new song
export function* handleCreateSong(action: { type: string; payload: Song }) {
  try {
    const response: AxiosResponse<Song> = yield call(
      createSongAPI,
      action.payload
    );
    yield put(createSongSlice(response.data));
    console.log("Testing Create song...", response.data);
  } catch (error) {
    // Handle error
    console.error("Error creating song:", error);
  }
}

// Worker Saga for updating an existing song
export function* handleUpdateSong(action: {
  type: string;
  payload: { id: string; song: Song };
}) {
  try {
    const { id, song } = action.payload;
    const response: AxiosResponse<Song> = yield call(updateSongAPI, id, song);
    yield put(updateSongSlice(response.data));
    console.log("Testing Update song...", response.data);
  } catch (error) {
    // Handle error
    console.error("Error updating song:", error);
  }
}

// Worker Saga for deleting a song
export function* handleDeleteSong(action: { type: string; payload: string }) {
  try {
    yield call(deleteSongAPI, action.payload);
    yield put(deleteSongSlice(action.payload));
    console.log("Testing Delete song...", action.payload);
  } catch (error) {
    // Handle error
    console.error("Error deleting song:", error);
  }
}

// Watcher Saga to watch for Redux actions
export function* watchSongsSagaAsync() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(CREATE_SONG, handleCreateSong);
  yield takeEvery(UPDATE_SONG_BY_ID, handleUpdateSong);
  yield takeEvery(DELETE_SONG_BY_ID, handleDeleteSong);
}

// Worker Saga for fetching a single song by ID
// export function* handleGetSongById(action: { type: string; payload: string }) {
//   try {
//     const response: AxiosResponse<Song> = yield call(
//       getSongByIdAPI,
//       action.payload
//     );
//     // Dispatch action to update state with the single song
//     yield put(setSongSlice(response.data));
//   } catch (error: any) {
//     // Handle error
//     console.error("Error fetching song by ID:", error);
//   }
// }
