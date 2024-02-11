import { useState } from "react";
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

  // Function to handle changes to input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedSong({ ...editedSong, [name]: value });
  };

  // Function to handle saving changes
  const handleSaveChanges = () => {
    dispatch({
      type: UPDATE_SONG_BY_ID,
      payload: { _id: editedSong._id, song: editedSong },
    });
    onHide(); // Close the modal after saving changes
  };
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="Edit Song">
      <Modal.Header closeButton>
        <Modal.Title>Edit Song</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedSong.title}
            onChange={handleChange}
          />
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={editedSong.artist}
            onChange={handleChange}
          />
          <label htmlFor="album">Album</label>
          <input
            type="text"
            id="album"
            name="album"
            value={editedSong.album}
            onChange={handleChange}
          />
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={editedSong.genre}
            onChange={handleChange}
          />
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
