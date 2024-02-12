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
      // Find the index of the song with the matching _id
      const index = state.findIndex((i) => i._id === action.payload._id);
      // If the song is found, replace it with the updated song, otherwise return the original state
      if (index !== -1) {
        state[index] = action.payload;
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
} = songsSlice.actions;
export default songsSlice.reducer;
