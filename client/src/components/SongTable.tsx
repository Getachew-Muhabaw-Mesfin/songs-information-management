import styled from "styled-components";
import SongRow from "./ui/SongRow";
import { useEffect } from "react";
import { RootState } from "../services/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { GET_SONGS } from "../services/redux/types/index";

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
    const song = useSelector((state: RootState) => state.song);
    console.log(songs)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch({ type: GET_SONGS });
    }, [song, dispatch]);
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
      {songs.map((song, index) => (
        <SongRow key={song.id} song={song} number={index} />
      ))}
    </Table>
  );
}

export default SongTable;
