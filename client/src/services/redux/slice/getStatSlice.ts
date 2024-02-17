import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatisticsState {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsInGenre: { [key: string]: number };
}

const initialState: StatisticsState = {
  totalSongs: 0,
  totalArtists: 0,
  totalAlbums: 0,
  totalGenres: 0,
  songsInGenre: {},
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getStatistics: (state, action: PayloadAction<StatisticsState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { getStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;
