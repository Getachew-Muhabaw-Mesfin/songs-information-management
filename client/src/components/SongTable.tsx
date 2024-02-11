import styled from "styled-components";
import SongRow from "./SongRow";
// import { setSongSlice } from "../services/redux/slice/song";
import { useEffect } from "react";
import { RootState } from "../services/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GET_SONGS,DELETE_SONG_BY_ID,UPDATE_SONG_BY_ID } from "../services/redux/types/index";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const SongTable=() =>{
    const songs = useSelector((state: RootState) => state.songs);
    const s = useSelector((state: RootState) => state.song);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({ type: GET_SONGS });
    }, [s, dispatch]);

     if (!Array.isArray(songs)) {
       return null;
     }
  return (
    <Table role="table">
      <TableHeader role="row">
        <div>#</div>
        <div>Title</div>
        <div>Artist</div>
        <div>Album</div>
        <div>Genre</div>
        <div>Actions</div>
      </TableHeader>
      {songs?.map(
        (song, index) =>
          song._id && ( // Check if _id exists before rendering
            <SongRow
              key={song._id}
              song={song}
              number={index}
              onDelete={() =>
                dispatch({ type: DELETE_SONG_BY_ID, _id: song._id })
              }
              onEdit={() =>
                dispatch(
                  // Ensure the dispatched action has the correct type and payload structure
                  {
                    type: UPDATE_SONG_BY_ID,
                    payload: { _id: song._id, song: song },
                  }
                )
              }
            />
          )
      )}
    </Table>
  );
}

export default SongTable;
