import { useState, useEffect } from "react";
import { searchData } from "../data";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const results = searchData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return {
    searchResults,
    handleSearch,
    query,
  };
};

export default useSearch;
