import { getSongsAPI, getSongByIdAPI,createSongAPI, updateSongAPI,deleteSongAPI} from "../../api/index";
import { put } from "redux-saga/effects";
import { getSongsSlice ,createSongSlice, updateSongSlice,deleteSongSlice} from "../slice/songs";
import { setSongSlice } from "../slice/song";
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

export function* createSongSaga(song:Song): Generator {
    try {
        const newSong = yield createSongAPI(song);
        yield put(createSongSlice(newSong));
    } catch (error) {
        console.log(error);
    }
}

export function* updateSongSaga(id:string, song:Song): Generator {
    try {
        const updatedSong = yield updateSongAPI(id,song);
        yield put(updateSongSlice(updatedSong));
    } catch (error) {
        console.log(error);
    }
}

export function* deleteSongSaga(id:string): Generator {
    try {
        yield deleteSongAPI(id);
        yield put(deleteSongSlice(id));
    } catch (error) {
        console.log(error);
    }
}