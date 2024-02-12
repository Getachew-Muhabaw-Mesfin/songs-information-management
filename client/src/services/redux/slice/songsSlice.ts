import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const initialState: Song[] = [];

interface SongsState extends Array<Song> {}

// const initialStat: SongsState = [
//   {
//     _id: "",
//     title: "",
//     artist: "",
//     album: "",
//     genre: "",
//   },
// ];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (state, action: PayloadAction<SongsState>) => {
      state = action.payload;
      return state;
    },
    // createSongSlice: (state, action: PayloadAction<Song>) => {
    //   state.push(action.payload);
    //   return state;
    // },
    createSongSlice: (state, action: PayloadAction<Song>) => {
      return [...state, action.payload];
    },
    updateSongSlice: (state, action: PayloadAction<Song>) => {
      const updatedSong = action.payload;
      const index = state.findIndex((song) => song._id === updatedSong._id);
      if (index !== -1) {
        state[index] = { ...updatedSong };
      }
    },

    updateSong: (
      state,
      action: PayloadAction<{ _id: string; updatedSongData: Partial<Song> }>
    ) => {
      const { _id, updatedSongData } = action.payload;
      const index = state.findIndex((song) => song._id === _id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedSongData };
      }
    },

    deleteSongSlice: (state, action: PayloadAction<string>) => {
      return state.filter((song) => song._id !== action.payload);
    },
    getStatistics: (state, action: PayloadAction<SongsState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {
  getSongsSlice,
  createSongSlice,
  updateSongSlice,
  deleteSongSlice,
  getStatistics,
  updateSong,
} = songsSlice.actions;
export default songsSlice.reducer;
