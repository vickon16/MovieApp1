import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const MovieCard = ({data}) => {
  const MotionLink = motion(Link);
  return (
    <>
      {data?.Poster && data?.Poster !== "N/A" && (
        <MotionLink
          to={`/movie/${data?.imdbID}`}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="border-2 rounded-lg flex flex-col gap-2 max-w-[280px] min-w-280 border-textColor bg-secondaryColor cursor-pointer overflow-hidden"
        >
          <aside className="w-full h-[280px] sm:h-[350px]">
            <img
              src={data.Poster}
              className="w-full h-full object-cover"
              alt={data.Title}
            />
          </aside>
          <aside className="text-fontPrimary flex flex-col p-2">
            <h4 className="text-base font-semibold py-3">{data.Title}</h4>
            <p className="text-sm font-light text-lighttextGray">{data.Year}</p>
          </aside>
        </MotionLink>
      )}
    </>
  );
}

export default MovieCard