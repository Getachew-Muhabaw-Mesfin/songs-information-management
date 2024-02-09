import { createSlice } from "@reduxjs/toolkit";

interface songSlice {
    name: string;
}

const songSlice = createSlice({
  name: "song",
  initialState: {},
});
