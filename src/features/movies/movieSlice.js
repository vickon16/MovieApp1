import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API, APIKey } from "../../apis/movieApi";

const initialState = {
    movies : {},
    selectedMovieDetail : {},
    series : {},
    isLoading : false,
    searchTerm : "",
};

// using a middleware for asychronyes fetch
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (searchTerm) => {
  const response = await API.get(`?apiKey=${APIKey}&s=${searchTerm}&type=movie`);
  return response.data;
})

export const fetchAsyncMovieDetail = createAsyncThunk("movieDetail/fetchAsyncMovieDetail", async (id) => {
  const response = await API.get(`?apiKey=${APIKey}&i=${id}&plot=full&type=movie`);
  return response.data;
})

export const fetchAsyncSeries = createAsyncThunk("movies/fetchAsyncSeries", async (searchTerm) => {
  const response = await API.get(`?apiKey=${APIKey}&s=${searchTerm}&type=series`);
  return response.data;
})



const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieDetails: (state) => {
      state.selectedMovieDetail = {};
    },
    setSearchTerm : (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: {
    // for all movies
    [fetchAsyncMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
    },
    // [fetchAsyncMovies.rejected]: () => {},

    //for single data
    [fetchAsyncMovieDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAsyncMovieDetail.fulfilled]: (state, action) => {
      state.selectedMovieDetail = action.payload;
      state.isLoading = false;
    },

    // for series
    [fetchAsyncSeries.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAsyncSeries.fulfilled]: (state, action) => {
      state.series = action.payload;
      state.isLoading = false;
    },
  },
});

export const {removeSelectedMovieDetails, setSearchTerm} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies
export const getAllSeries = (state) => state.movies.series
export const getSelectedMovieDetails = (state) => state.movies.selectedMovieDetail;
export const getLoadingState = (state) => state.movies.isLoading;
export const getSearchTerm = (state) => state.movies.searchTerm;

export default movieSlice.reducer;
