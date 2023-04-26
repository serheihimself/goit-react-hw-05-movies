import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '7408b4f50805114f113b5482c05df3a7' };

export async function fetchGetTrending() {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
}

export async function fetchGetMovies(query) {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
}

export async function fetchGetMoviesDetails(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export async function fetchGetCast(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
}

export async function fetchGetReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
}
