
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../services/redux/store";
import { setSongSlice } from "../services/redux/slice/song";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_SONG } from "../services/redux/types/index";

function Form() {
  const [lgShow, setLgShow] = useState(false);
  const song = useSelector((state: RootState) => state.song);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setSongSlice({ ...song, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSong = {
      ...song,
      _id: song._id ? nanoid(8) : undefined,
    };
    dispatch({ type: CREATE_SONG, payload: newSong });
    dispatch(
      setSongSlice({ _id: "", title: "", artist: "", album: "", genre: "" })
    );
    setLgShow(false);
  };

  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="btn btn-bg-primary btn-lg mt-2 float-end"
      >
        <IoMdAddCircleOutline size={15} /> Add Song
      </Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        className=""
        aria-labelledby="Form-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="Form-modal-sizes-title-lg">Add Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={song.title}
                onChange={handleChange}
                placeholder="Enter song Title"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="artist" className="form-label">
                Artist
              </label>
              <input
                type="text"
                className="form-control"
                id="artist"
                name="artist"
                placeholder="Enter Artist name"
                value={song.artist}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="album" className="form-label">
                Album
              </label>
              <input
                type="text"
                className="form-control"
                id="album"
                name="album"
                placeholder="Enter Album name"
                value={song.album}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <input
                type="text"
                className="form-control"
                id="genre"
                name="genre"
                placeholder="Enter Genre"
                value={song.genre}
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <Button
                type="submit"
                className="btn btn-bg-primary btn-lg float-end "
              >
                <IoMdAddCircleOutline size={20} /> Add Song
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Form;



// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../services/redux/store";
// import { setSongSlice } from "../services/redux/slice/song";
// import { nanoid } from "@reduxjs/toolkit";
// import {CREATE_SONG} from "../services/redux/types/index";

// const Form = () => {
//   const song = useSelector((state: RootState) => state.song);
//   const dispatch = useDispatch();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     dispatch(setSongSlice({ ...song, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const newSong = {
//       ...song,
//       _id: song._id ? nanoid(8) : undefined,
//     };
//     dispatch({ type: CREATE_SONG, payload: newSong });
//     dispatch(
//       setSongSlice({ _id: "", title: "", artist: "", album: "", genre: "" })
//     );
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={song.title}
//           onChange={handleChange}
//         />
//         <label htmlFor="artist">Artist</label>
//         <input
//           type="text"
//           id="artist"
//           name="artist"
//           value={song.artist}
//           onChange={handleChange}
//         />
//         <label htmlFor="album">Album</label>
//         <input
//           type="text"
//           id="album"
//           name="album"
//           value={song.album}
//           onChange={handleChange}
//         />
//         <label htmlFor="genre">Genre</label>
//         <input
//           type="text"
//           id="genre"
//           name="genre"
//           value={song.genre}
//           onChange={handleChange}
//         />
//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// };

// export default Form;