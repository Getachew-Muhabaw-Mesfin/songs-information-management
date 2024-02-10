import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongsState extends Array<Song> {}

const initialState: SongsState = [
  {
    id: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
  },
];

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    getSongsSlice: (state, action: PayloadAction<SongsState>) => {
      state = action.payload;
      return state;
    },
    createSongSlice: (state, action: PayloadAction<Song>) => {
      state.push(action.payload);
      return state;
    },
    updateSongSlice: (state, action: PayloadAction<Song>) => {
      state = state.map((i) =>
        i.id == action.payload.id ? action.payload : i
      );
      return state;
    },
    deleteSongSlice: (state, action: PayloadAction<string>) => {
      state = state.filter((i) => i.id !== action.payload);
      return state;
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
