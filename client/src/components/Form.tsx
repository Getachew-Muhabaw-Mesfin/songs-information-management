import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../services/redux/store";
import { setSongSlice } from "../services/redux/slice/song";
// import {
//   createSongSlice,
//   updateSongSlice,
// } from "../services/redux/slice/songs";
import { nanoid } from "@reduxjs/toolkit";
import {CREATE_SONG} from "../services/redux/types/index";

const Form = () => {
  const song = useSelector((state: RootState) => state.song);
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Dispatch an action to update the song state
    dispatch(setSongSlice({ ...song, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    song.id? dispatch(dispatch({type:CREATE_SONG,payload:{...song,id:nanoid(8)}})):dispatch(dispatch({type:CREATE_SONG,payload:song}));
    
    // song.id
    //   ? dispatch(createSongSlice({ ...song, id: nanoid(8) }))
    //   : dispatch(updateSongSlice(song));
    dispatch(
      setSongSlice({ id: "", title: "", artist: "", album: "", genre: "" })
    );
    console.log(song);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={song.title}
          onChange={handleChange}
        />
        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          id="artist"
          name="artist"
          value={song.artist}
          onChange={handleChange}
        />
        <label htmlFor="album">Album</label>
        <input
          type="text"
          id="album"
          name="album"
          value={song.album}
          onChange={handleChange}
        />
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={song.genre}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
