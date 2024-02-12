import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: {
    _id: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
  },
  reducers: {
    setSongSlice: (state, action) => {
      state = action.payload;
      console.log("Set Songs Slice Called");
      return state;
    },
  },
});
export const { setSongSlice } = songSlice.actions;
export default songSlice.reducer;
