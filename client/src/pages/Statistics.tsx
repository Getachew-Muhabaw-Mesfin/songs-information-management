import Heading from "../components/ui/Heading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../services/redux/store";
import { GET_STATISTICS } from "../services/redux/types";
import Spinner from "../components/ui/Spinner";
import { Bar, Pie } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js/auto";
import { Link } from "react-router-dom";
Chart.register(CategoryScale);

interface BarData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderWidth: number;
  }[];
}

interface PieData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
}

const Statistics = () => {
  const dispatch = useDispatch();
  const { totalSongs, totalArtists, totalAlbums, totalGenres, songsInGenre } =
    useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch({ type: GET_STATISTICS });
  }, [dispatch]);

  const barData: BarData = {
    labels: ["Total Songs", "Total Artists", "Total Albums", "Total Genres"],
    datasets: [
      {
        label: "Statistics",
        data: [totalSongs, totalArtists, totalAlbums, totalGenres],
        backgroundColor: ["#24CEC8", "#C7D710", "#2174C9", "#FA8937"],
        borderWidth: 1,
      },
    ],
  };

  const genreData: PieData | null = songsInGenre
    ? {
        labels: Object.keys(songsInGenre),
        datasets: [
          {
            label: "Songs in Genre",
            data: Object.values(songsInGenre),
            backgroundColor: [
              "#24CEC8",
              "#C7D710",
              "#2174C9",
              "#FA8937",
              "#FF6384",
            ],
          },
        ],
      }
    : null;

  return (
    <div>
      <Heading>Statistics</Heading>
      <div className="row">
        <div className="col-md-6">
          {totalSongs === undefined ? <Spinner /> : <Bar data={barData} />}
        </div>
        <div className="col-md-6 gx-2">
          <div
            style={{ width: "300px", margin: "0 auto", textAlign: "center" }}
          >
            <h3>Songs in Genre</h3>
            {genreData && <Pie data={genreData} width={300} height={300} />}
          </div>
        </div>
        <div className="col-md-6">{genreData && <Bar data={genreData} />}</div>
        <div
          className="col-md-6"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "18px" }}>
            Full Statistics API available on:
            <Link
              to="https://sonf-info.onrender.com/api/v1/statistics"
              style={{
                color: "blue",
                textDecoration: "underline",
                fontWeight: "bold",
                marginLeft: "5px",
              }}
              target="_blank"
            >
              Get Statistics API
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
