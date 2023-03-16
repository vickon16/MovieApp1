/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import {BiSearch} from "react-icons/bi"
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/movies/movieSlice";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [searched, setSearched] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    if (!searched || searched === "" || searched.length <= 2) {
      return;
    }
    dispatch(setSearchTerm(searched))
    setSearched("")
  }

  return (
    <form
      onSubmit={submitSearch}
      className="w-full max-w-[700px] gap-2 mt-2 mb-6 flex items-center border border-gray-500 px-3 py-1 rounded-md"
    >
      <button className="text-xl text-fontPrimary w-8 h-8 block">
        <BiSearch className="h-full w-full" />
      </button>
      <input
        type="text"
        value={searched}
        className="w-full flex-1 bg-transparent h-10 border-l-2 border-inherit focus:outline-none text-fontPrimary px-3"
        placeholder="Search Movies..."
        onChange={(e) => setSearched(e.target.value)}
      />
    </form>
  );
}

export default SearchComponent