import React, { useState } from "react";
import { map } from "lodash";

import Search from "../../assets/search.svg";
import SearchResult from "./SearchResult";

const SearchBox = () => {
  const [query, setQuery] = useState(null);
  const results = [
    {
      id: 1,
      image: "../../images/prof.png",
      name: "Vince Kamp",
      handle: "@vincekamp",
    },
    {
      id: 2,
      image: "../../images/prof.png",
      name: "Vince Kamp",
      handle: "@vincekamp",
    },
    {
      id: 3,
      image: "../../images/prof.png",
      name: "Vince Kamp",
      handle: "@vincekamp",
    },
    {
      id: 4,
      image: "../../images/prof.png",
      name: "Vince Kamp",
      handle: "@vincekamp",
    },
    {
      id: 5,
      image: "../../images/prof.png",
      name: "Vince Kamp",
      handle: "@vincekamp",
    },
  ];
  return (
    <div className="relative px-12">
      <form className="relative" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          onChange={(e) => setQuery(e.currentTarget.value)}
          placeholder="Search"
          className="bg-cream-600 placeholder-black-200 text-black-500 text-xs font-semibold rounded-full border-none px-8 py-2 outline-none"
        />
        <Search className="absolute text-black-200 stroke-current left-2 h-3 top-1/2 transform -translate-y-1/2" />
      </form>
      {query && (
        <div className="absolute left-0 w-full top-full shadow-sm rounded-sm bg-white mt-2">
          {map(results, (r, index) => (
            <SearchResult
              key={r.id}
              result={r}
              isLast={index === results.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
