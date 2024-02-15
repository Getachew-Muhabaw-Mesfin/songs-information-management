import axios, { AxiosResponse } from "axios";

// Define interfaces for response data
interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

// Define interfaces for request data
interface SongData {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

// axios.defaults.baseURL = "https://sonf-info.onrender.com/api/v1/";
axios.defaults.baseURL = "http://127.0.0.1:3000/api/v1";

// Define API functions with TypeScript types
export const createSongAPI = async (
  song: SongData
): Promise<AxiosResponse<Song>> => axios.post("/songs", song);
export const getSongsAPI = async (): Promise<AxiosResponse<Song[]>> =>
  axios.get("/songs");
export const getSongByIdAPI = async (_id: string): Promise<AxiosResponse<Song>> =>
  axios.get(`/songs/${_id}`);
export const updateSongAPI = async (
  _id: string,
  song: SongData
): Promise<AxiosResponse<Song>> => axios.patch(`/songs/${_id}`, song);

export const deleteSongAPI = async (_id: string): Promise<AxiosResponse<void>> =>
  axios.delete(`/songs/${_id}`);

  export const getStatisticsAPI = async (): Promise<AxiosResponse<Song[]>> =>
    axios.get("/statistics");
