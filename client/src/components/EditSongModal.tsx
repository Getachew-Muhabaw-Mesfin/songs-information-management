import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { UPDATE_SONG_BY_ID } from "../services/redux/types/index";

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface EditModalProps {
  show: boolean;
  onHide: () => void;
  song: Song;
}

const EditSongModal: React.FC<EditModalProps> = ({ show, onHide, song }) => {
  const [editedSong, setEditedSong] = useState<Song>(song);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedSong({ ...editedSong, [name]: value });
  };

  const handleSaveChanges = () => {
    dispatch({
      type: UPDATE_SONG_BY_ID,
      payload: { _id: editedSong._id, song: editedSong },
    });
    onHide();
  };
  useEffect(() => {
    setEditedSong(song);
  }, [song]);

  return (
    <Modal show={show} onHide={onHide} aria-labelledby="Edit Song">
      <Modal.Header closeButton>
        <Modal.Title>Edit Song</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={editedSong.title}
              onChange={handleChange}
              className="form-control"
    
            />
          </div>
          <div className="mb-3">
            <label htmlFor="artist" className="form-label">
              Artist
            </label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={editedSong.artist}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="album" className="form-label">
              Album
            </label>
            <input
              type="text"
              id="album"
              name="album"
              value={editedSong.album}
              onChange={handleChange}
              className="form-control "
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={editedSong.genre}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditSongModal;
