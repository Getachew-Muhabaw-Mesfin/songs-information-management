import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "songs",
  initialState: [
    {
      id: "",
      title: "",
      artist: "",
      album: "",
      genre: "",
    },
  ],
  reducers: {
    getSongsSlice: (state) => {
      return state;
    },
    createSongSlice: (state, action) => {
         state.push(action.payload);
        return state;
    },
    updateSongSlice: (state, action) => {
      const index = state.findIndex((song) => song.id === action.payload.id);
      state[index] = action.payload;
      return state;
    },
    deleteSongSlice: (state, action) => {
        state = state.filter((song) => song.id !== action.payload);
      return state;
    },
  },
});
export const { getSongsSlice, createSongSlice, updateSongSlice, deleteSongSlice } = songsSlice.actions;
export default songsSlice.reducer;
