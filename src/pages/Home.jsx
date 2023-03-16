/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieListing, SearchComponent } from '../components';
import { fetchAsyncMovies, fetchAsyncSeries, getAllMovies, getAllSeries, getLoadingState, getSearchTerm } from '../features/movies/movieSlice';

const Home = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
  const loading = useSelector(getLoadingState);
  const searchTerm = useSelector(getSearchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm === "") {
      dispatch(fetchAsyncMovies("avatar"));
      dispatch(fetchAsyncSeries("avatar"));
    } else {
      dispatch(fetchAsyncMovies(searchTerm));
      dispatch(fetchAsyncSeries(searchTerm));
    }
  }, [searchTerm]);

  return (
    <>
      <SearchComponent />
      {loading ? (
        <div className="text-fontPrimary text-2xl my-4 text-center">...Loading...</div>
      ) : (
        <>
          <MovieListing display={movies} displayName={"Movies"} />
          <MovieListing display={series} displayName={"Series"} />
        </>
      )}
    </>
  );
}

export default Home