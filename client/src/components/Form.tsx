import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { CREATE_SONG } from "../services/redux/types/index";
import { nanoid } from "@reduxjs/toolkit";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const Form: React.FC = () => {
  const [lgShow, setLgShow] = useState(false);
  const [song, setSong] = useState<Song>({
    _id: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const dispatch = useDispatch();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSong((prevSong) => ({ ...prevSong, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSong: Song = {
      ...song,
      _id: nanoid(8),
    };
    dispatch({ type: CREATE_SONG, payload: newSong });
    setLgShow(false);
    setSong({ _id: "", title: "", artist: "", album: "", genre: "" });
    toast.success("Song successfully added");
  };

  return (
    <>
      <Button
        onClick={() => setLgShow(true)}
        className="btn btn-bg-success btn-lg mt-2 float-end"
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
                required
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
                required
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
                required
                value={song.album}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="genre" className="form-label">
                Genre
              </label>
              <select
                className="form-select"
                id="genre"
                name="genre"
                required
                value={song.genre}
                onChange={handleChange}
              >
                <option value="">----select Genre----</option>
                <option value="Country">Country</option>
                <option value="Love">Love</option>
                <option value="Classical">Classical</option>
                <option value="Reggae">Reggae</option>
                <option value="Jazz">Jazz</option>
              </select>
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
};

export default Form;

