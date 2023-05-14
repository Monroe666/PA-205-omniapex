import { useState, useEffect } from "react";
import { searchData } from "../data";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (query.length > 0) {
      const results = searchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setActiveIndex(-1); // Reset active index when query changes
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return {
    searchResults,
    handleSearch,
    handleKeyDown,
    query,
  };
};

export default useSearch;