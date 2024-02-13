import styled from "styled-components";
import SongRow from "./SongRow";
import { useEffect, useCallback } from "react";
import { RootState } from "../services/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GET_SONGS, DELETE_SONG_BY_ID } from "../services/redux/types/index";

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

const SongTable = () => {
  const songs = useSelector((state: RootState) => state.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, [dispatch]);
  useEffect(() => {
    dispatch({ type: GET_SONGS });
  });

  const handleDelete = useCallback(
    (id: string) => {
      dispatch({ type: DELETE_SONG_BY_ID, _id: id });
    },
    [dispatch]
  );
 if (!Array.isArray(songs) || songs.length === 0) {
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
          song._id && ( 
            <SongRow
              key={song._id} 
              song={song}
              number={index}
              onDelete={() => handleDelete(song._id)}
            />
          )
      )}
    </Table>
  );
};

export default SongTable;
