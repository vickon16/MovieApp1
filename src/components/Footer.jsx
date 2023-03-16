import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-secondaryColor h-28 px-5">
      <div className="container mx-auto w-full h-full flex flex-col gap-3 items-center justify-center text-fontPrimary">
        <Link to="/">
          <article className="logo text-xl md:text-2xl font-semibold">
            Movie App
          </article>
        </Link>
        <p className="text-xs sm:text-sm font-extralight">
          @2023, Movie, Inc. or its affliates.
        </p>
      </div>
    </footer>
  );
}

export default Footer