import Heading from "../components/ui/Heading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/redux/store";
import { GET_STATISTICS } from "../services/redux/types";
// import Row from "../ui/Row";

const Statistics = () => {
  const dispatch = useDispatch();
  const { totalSongs, totalArtists, totalAlbums, totalGenres } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch({ type: GET_STATISTICS });
  }, [dispatch]);
  console.log(totalSongs, totalArtists, totalAlbums, totalGenres);
  return <Heading>Statistics</Heading>;
};

export default Statistics;
