import { GET_STATISTICS } from "../types/index";
import { getStatisticsAPI } from "../../api/index";
import {setStatistics} from "../slice/getStatSlice";
import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";

interface StatisticsState {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsInGenre: { [key: string]: number } | null;
}

// Worker Saga for fetching statistics
export function* getStatSaga() {
    try {
        const statistics: AxiosResponse<StatisticsState> = yield call(getStatisticsAPI);
        yield put(setStatistics(statistics.data)); // Fix: Remove the type casting
    } catch (error) {
        console.error("Error fetching statistics:", error);
    }
}
  