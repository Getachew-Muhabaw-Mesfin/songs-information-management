import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongsState extends Array<Song> {}

const initialState: SongsState = [];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (state, action: PayloadAction<SongsState>) => {
      return action.payload;
    },
    createSongSlice: (state, action: PayloadAction<Song>) => {
      state.push(action.payload);
    },
    updateSongSlice: (state, action: PayloadAction<Song>) => {
      const index = state.findIndex((song) => song.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteSongSlice: (state, action: PayloadAction<string>) => {
      return state.filter((song) => song.id !== action.payload);
    },
  },
});

export const {
  getSongsSlice,
  createSongSlice,
  updateSongSlice,
  deleteSongSlice,
} = songsSlice.actions;
export default songsSlice.reducer;
