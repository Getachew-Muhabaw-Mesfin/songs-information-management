import { useEffect } from "react";
import { RootState } from "../services/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GET_SONGS } from "../services/redux/types/index";

const Information = () => {
  const songs = useSelector((state: RootState) => state.songs); // Access the inner songs array
  console.log(typeof songs);
  console.log(songs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);

  return (
    <div>
      <h1>All Songs</h1>
      <ul>
        {songs.map((song) => (
            <li key={song._id}>
                <p>Title: {song.title}</p>
                <p>Artist: {song.artist}</p>
                <p>Album: {song.album}</p>
                <p>Genre: {song.genre}</p>
            </li>
            
        ))}
      </ul>
    </div>
  );
};

export default Information;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../services/redux/store";
// import { getSongsSlice } from "../services/redux/slice/songsSlice";
// import {GET_SONGS} from "../services/redux/types/index";

// const Information: React.FC = () => {
//   const dispatch = useDispatch();
//   const songs = useSelector((state: RootState) => state.songs);

//   useEffect(() => {
//     // Dispatch an action to fetch songs when the component mounts
//     dispatch(getSongsSlice());
//   }, [dispatch]); // Ensure the effect runs only once on component mount

//   return (
//     <div>
//       <h1>All Songs</h1>
//       <ul>
//         {songs.map((song) => (
//           <li key={song.id}>
//             <p>Title: {song.title}</p>
//             <p>Artist: {song.artist}</p>
//             <p>Album: {song.album}</p>
//             <p>Genre: {song.genre}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Information;
