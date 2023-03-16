/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieDetail, getLoadingState, getSelectedMovieDetails, removeSelectedMovieDetails } from '../features/movies/movieSlice';
import { BsFillStarFill, BsFilm, BsCalendar2Date } from "react-icons/bs";
import { MdHowToVote } from "react-icons/md";

const MovieDetail = () => {
  const {imdbID} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(getSelectedMovieDetails);
  const loading = useSelector(getLoadingState);


  const categories = ["Director","Actors","Genre","Language","Awards","Rated", "Country", "Released", "Type"];

  const paraStyles = "flex flex-col justify-center items-center gap-1 bg-orange-200 p-2 rounded-lg text-sm text-center w-28"

  const spanStyles = "text-red-500 inline-block mr-1";

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID))

    return () => {
      dispatch(removeSelectedMovieDetails(imdbID))
    }
  }, [imdbID])


  return (
    <>
      {movie ? (
        <section className="w-full py-6 flex-col md:flex-row flex items-center flex-wrap justify-center gap-3">
          {loading && Object.keys(movie).length === 0 ? (
            <div className='text-fontPrimary text-2xl my-4'>...Loading...</div>
          ) :
          (
            <>
              <aside className="w-full flex-1 py-4 px-2 flex flex-col gap-y-4">
                <article className="text-orange-200 text-2xl font-semibold tracking-wide ">
                  {movie?.Title}
                </article>
                <article className="flex flex-wrap gap-3 items-center max-w-[500px]">
                  <div className={paraStyles}>
                    <p className='font-semiBold text-base'>IMDB Ration</p>
                    <span>
                      <BsFillStarFill className={spanStyles} />
                      {movie.imdbRating}
                    </span>
                  </div>
                  <div className={paraStyles}>
                    <p className='font-semiBold text-base'>IMDB Votes</p>
                    <span>
                      <MdHowToVote className={spanStyles} /> {movie.imdbVotes}
                    </span>
                  </div>
                  <div className={paraStyles}>
                    <p className='font-semiBold text-base'>Runtime</p>
                    <span>
                      <BsFilm className={spanStyles} /> {movie.Runtime}
                    </span>
                  </div>
                  <div className={paraStyles}>
                    <p className='font-semiBold text-base'>Year</p>
                    <span>
                      <BsCalendar2Date className={spanStyles} /> {movie.Year}
                    </span>
                  </div>
                </article>
                <article className="text-lighttextGray text-sm md:text-base my-2 max-w-[700px]">{movie.Plot}</article>
                <article className="w-full flex flex-wrap items-center justify-between">
                  {categories.map(
                    (item) => movie[item] && movie[item] !== "N/A" && (
                        <p key={movie.imdbID + item} className='w-full sm:w-[48%] p-2 text-sm font-extralight'>
                          <span className='text-orange-200 '>{item} : </span>
                          <span className='text-orange-50 '>{movie[item]}</span>
                        </p>
                      )
                  )}
                </article>
                <p>{movie?.title}</p>
                <p>{movie?.title}</p>
              </aside>
              <aside className="w-full max-w-[370px] rounded-lg overflow-hidden">
                <img
                  src={movie.Poster}
                  className="w-full h-full object-cover"
                  alt={movie.title}
                />
              </aside>
            </>
          )}
        </section>
      ) : (
        <div className="w-full text-2xl text-fontPrimary">
          No Movie Detail found
        </div>
      )}
    </>
  );
}

export default MovieDetail