import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Popconfirm } from "antd";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { UPDATE_SONG_BY_ID } from "../services/redux/types";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const RowData = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Artist = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Album = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}
interface SongRowProps {
  song: Song;
  number: number;
  onDelete: () => void;
}

const SongRow: React.FC<SongRowProps> = ({ song, number, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [updatedSong, setUpdatedSong] = useState({ ...song });
  const { title, artist, album, genre } = song;
  const dispatch = useDispatch();

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedSong((prevSong) => ({
      ...prevSong,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    dispatch({
      type: UPDATE_SONG_BY_ID,
      payload: { _id: updatedSong._id, song: updatedSong },
    });
    setShowModal(false);
    toast.success("Song successfully updated");
  };
  const handleDelete = () => {
    onDelete();
    toast.success("Song successfully deleted");
  };

  return (
    <>
      <TableRow role="row">
        <RowData role="cell">{number + 1}</RowData>
        <RowData role="cell">{title}</RowData>
        <Artist role="cell">{artist}</Artist>
        <Album role="cell">{album}</Album>
        <RowData role="cell">{genre}</RowData>

        <div>
          <button onClick={handleEdit} className="btn">
            <FaEdit style={{ color: "blue" }} size={20} />
          </button>
          <Popconfirm
            title={`Are you sure to delete this Song (${title}) ?`}
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
          >
            <button className="btn">
              <MdDelete style={{ color: "red" }} size={20} />
            </button>
          </Popconfirm>
        </div>
      </TableRow>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="title">
                  <Form.Label>Title:</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={updatedSong.title}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group controlId="artist">
                  <Form.Label>Artist:</Form.Label>
                  <Form.Control
                    type="text"
                    name="artist"
                    value={updatedSong.artist}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Form.Group controlId="album">
                  <Form.Label>Album:</Form.Label>
                  <Form.Control
                    type="text"
                    name="album"
                    value={updatedSong.album}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group controlId="genre">
                  <Form.Label>Genre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    value={updatedSong.genre}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SongRow;
