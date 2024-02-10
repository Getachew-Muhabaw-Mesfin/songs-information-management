import styled from "styled-components";
import { HiPencil,  HiTrash } from "react-icons/hi2";
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
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongRowProps {
  song: Song;
  number: number;
  onDelete: () => void; 
  onEdit: () => void; 
}
const SongRow: React.FC<SongRowProps> = ({
  song,
  number,
  onDelete,
  onEdit,
}) => {
  const { title, artist, album, genre } = song;

  // console.log(id)
  return (
    <>
      <TableRow role="row">
        <RowData role="cell">{number + 1}</RowData>
        <RowData role="cell">{title}</RowData>
        <Artist role="cell">{artist}</Artist>
        <Album role="cell">{album}</Album>
        <RowData role="cell">{genre}</RowData>

        <div>
          <button onClick={onEdit} style={{ marginRight: "1rem" }}>
            <HiPencil />
          </button>
          <button onClick={onDelete}>
            <HiTrash style={{color:'red'}}/>
          </button>
        </div>
      </TableRow>
    </>
  );
};

export default SongRow;
