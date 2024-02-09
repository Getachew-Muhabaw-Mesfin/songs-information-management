import axios, { AxiosResponse } from "axios";

// Define interfaces for response data
interface Song {
  id: string;
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

axios.defaults.baseURL = "http://127.0.0.1:3000/api/v1";

// Define API functions with TypeScript types
export const createSongAPI = async (
  song: SongData
): Promise<AxiosResponse<Song>> => axios.post("/songs", song);
export const getSongsAPI = async (): Promise<AxiosResponse<Song[]>> =>
  axios.get("/songs");
export const getSongByIdAPI = async (id: string): Promise<AxiosResponse<Song>> =>
  axios.get(`/songs/${id}`);
export const updateSongAPI = async (
  id: string,
  song: SongData
): Promise<AxiosResponse<Song>> => axios.patch(`/songs/${id}`, song);

export const deleteSongAPI = async (id: string): Promise<AxiosResponse<void>> =>
  axios.delete(`/songs/${id}`);
