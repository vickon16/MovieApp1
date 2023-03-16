import MovieCard from './MovieCard';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from "react-icons/bs";
import { useRef } from 'react';

const MovieListing = ({display, displayName}) => {
  const rowContainer = useRef();

  const scroll = (scrollOffset) => {
    rowContainer.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      {display && display?.Response === "True" ? (
        <section className="w-full flex flex-col">
          <h2 className="text-orange-200 font-semibold text-2xl mt-2 mb-4 ">
            {displayName}
          </h2>
    
          <section className="w-full hidden sm:flex items-center justify-between">
            <BsFillArrowLeftSquareFill
              className="text-[2rem] text-orange-300 cursor-pointer"
              onClick={() => scroll(-280)}
            />
            <BsFillArrowRightSquareFill
              className="text-[2rem] text-orange-300 cursor-pointer"
              onClick={() => scroll(280)}
            />
          </section>
    
          <section
            ref={rowContainer}
            className="w-full py-4 grid grid-cols-220 grid-flow-col-dense overflow-auto gap-3 place-items-center scrollbar-hide md:scrollbar-default scroll-smooth "
          >
            {display.Search.map((movie, index) => (
                <MovieCard key={movie.imdbID + index} data={movie} />
            ))}
          </section>
        </section>
      ) : (
        <div className="error">
          <h3 className="text-xl text-fontPrimary p-2">
            <span className="text-red-500">-- :</span> {display.Error}
          </h3>
        </div>
      )}
    </>
  );
}

export default MovieListing