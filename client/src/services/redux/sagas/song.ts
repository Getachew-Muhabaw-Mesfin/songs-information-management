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

// Worker Saga for fetching all songs
function* handleGetSongs() {
  try {
    const response: AxiosResponse<Song[]> = yield call(getSongsAPI);
    yield put(getSongsSlice(response.data));
  } catch (error) {
    // Handle error
    console.error("Error fetching songs:", error);
  }
}

// Worker Saga for fetching a single song by ID
// function* handleGetSongById(action: { type: string; payload: string }) {
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

// Worker Saga for creating a new song
function* handleCreateSong(action: { type: string; payload: Song }) {
  try {
    const response: AxiosResponse<Song> = yield call(
      createSongAPI,
      action.payload
    );
    yield put(createSongSlice(response.data));
  } catch (error) {
    // Handle error
    console.error("Error creating song:", error);
  }
}

// Worker Saga for updating an existing song
function* handleUpdateSong(action: {
  type: string;
  payload: { id: string; song: Song };
}) {
  try {
    const { id, song } = action.payload;
    const response: AxiosResponse<Song> = yield call(updateSongAPI, id, song);
    yield put(updateSongSlice(response.data));
  } catch (error) {
    // Handle error
    console.error("Error updating song:", error);
  }
}

// Worker Saga for deleting a song
function* handleDeleteSong(action: { type: string; payload: string }) {
  try {
    yield call(deleteSongAPI, action.payload);
    yield put(deleteSongSlice(action.payload));
  } catch (error) {
    // Handle error
    console.error("Error deleting song:", error);
  }
}

// // Watcher Saga to watch for Redux actions
export function* watchSongsSaga() {
  yield takeEvery(GET_SONGS, handleGetSongs);
  yield takeEvery(CREATE_SONG, handleCreateSong);
  yield takeEvery(UPDATE_SONG_BY_ID, handleUpdateSong);
  yield takeEvery(DELETE_SONG_BY_ID, handleDeleteSong);
}


