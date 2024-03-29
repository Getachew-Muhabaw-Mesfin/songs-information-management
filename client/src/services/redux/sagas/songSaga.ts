import { call, put, takeEvery } from "redux-saga/effects";
import {
  getSongsAPI,
  createSongAPI,
  updateSongAPI,
  deleteSongAPI,
  getStatisticsAPI
} from "../../api";
import {
  getSongsSlice,
  createSongSlice,
  updateSongSlice,
  deleteSongSlice,
  
} from "../slice/songsSlice";

import {getStatistics} from "../slice/getStatSlice";
import {
  GET_SONGS,
  CREATE_SONG,
  UPDATE_SONG_BY_ID,
  DELETE_SONG_BY_ID,
  GET_STATISTICS,
} from "../types";
import { AxiosResponse } from "axios";
interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}
interface StatisticsState {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsInGenre: { [key: string]: number };
}


export function* getSongsSaga() {
  try {
    const songs: AxiosResponse<Song[]> = yield call(getSongsAPI);
    yield put(getSongsSlice(songs.data));
  } catch (error) {
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
  } catch (error) {
    console.error("Error creating song:", error);
  }
}

// Worker Saga for updating an existing song
export function* handleUpdateSong(action: {
  type: string;
  payload: { _id: string; song: Song };
}) {
  try {
    const { _id, song } = action.payload;
    const response: AxiosResponse<Song> = yield call(updateSongAPI, _id, song);
    yield put(updateSongSlice(response.data));
  } catch (error) {
    console.error("Error updating song:", error);
  }
}

interface DeleteSongAction {
  type: typeof DELETE_SONG_BY_ID;
  _id: string;
}

export function* deleteSongByIdSaga(action: DeleteSongAction) {
  try {
    yield call(deleteSongAPI, action._id);
    yield put(deleteSongSlice(action._id));
  } catch (error) {
    console.error("Error deleting song:", error);
  }
}

export function* getStatisticsSaga() {
  try {
    const statistics: AxiosResponse<StatisticsState> = yield call(getStatisticsAPI);
    yield put(getStatistics(statistics.data));
  } catch (error) {
    console.error("Error fetching statistics:", error);
  }

}

// Watcher Saga to watch for Redux actions
export function* watchSongsSagaAsync() {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(CREATE_SONG, handleCreateSong);
  yield takeEvery(UPDATE_SONG_BY_ID, handleUpdateSong);
  yield takeEvery(DELETE_SONG_BY_ID, deleteSongByIdSaga);
  yield takeEvery(GET_STATISTICS, getStatisticsSaga);
}

