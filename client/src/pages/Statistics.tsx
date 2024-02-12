import Heading from "../components/ui/Heading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/redux/store";
import { GET_STATISTICS } from "../services/redux/types";
import Spinner from "../components/ui/Spinner";


const Statistics = () => {
  const dispatch = useDispatch();
  const { totalSongs, totalArtists, totalAlbums, totalGenres } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch({ type: GET_STATISTICS });
  }, [dispatch]);

  return (
    <div>
      <Heading>Statistics</Heading>
      <div>
        {totalSongs === undefined ? (
          <Spinner />
        ) : (
          <div>
            <div>
              <h3>Total Songs: {totalSongs}</h3>
              <h3>Total Artists: {totalArtists}</h3>
              <h3>Total Albums: {totalAlbums}</h3>
              <h3>Total Genres: {totalGenres}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statistics;
