import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
const Search = ({ openSearch, hide }) => {
  const [input, setInput] = useState("");
  return (
    <div
      className={`${
        openSearch ? "h-[60px] visible" : "h-0 invisible"
      } w-full bg-white flex justify-center items-center transition-all duration-300 box-border`}
    >
      <div className="relative flex items-center h-full w-fit">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mr-5 outline-none border-2 border-gray-800/50 pl-4 pr-8 rounded-full h-[70%] lg:w-[700px] md:w-[500px] w-[300px]"
          type="text"
          placeholder="Search"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          onClick={() => setInput("")}
          className="absolute cursor-pointer right-8 text-gray-800/70"
        />
      </div>
      <FontAwesomeIcon
        icon={faX}
        className="absolute cursor-pointer right-8 text-gray-800/70"
        onClick={hide}
      />
    </div>
  );
};

export default Search;
