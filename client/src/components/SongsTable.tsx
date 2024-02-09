import { useSelector } from "react-redux";
import { RootState } from "../services/redux/store"; // Import the RootState type

const SongsTable = () => {
  const rows = useSelector((state: RootState) => state.songs); // Provide type annotation for 'state'
  return <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((song) => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
};

export default SongsTable;
