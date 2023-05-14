import React, { useRef, useEffect } from 'react';
import useSearch from "./fragments/useSearch";
import "./styles/TopNav.css";

function Search() {
  const {
    searchResults,
    handleSearch,
    handleKeyDown,
    activeIndex,
    handleMouseEnter,
    handleMouseLeave
  } = useSearch();

  const searchInputRef = useRef(null);

  const handleClick = (result) => {
    console.log('User selected:', result);
  };

  useEffect(() => {
    const handleDocumentKeyDown = (event) => {
      if (document.activeElement === searchInputRef.current && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
        searchInputRef.current.blur();
      }
      handleKeyDown(event);
    };

    document.addEventListener('keydown', handleDocumentKeyDown);

    return () => {
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="search-container">
      <input
        ref={searchInputRef}
        className="search"
        type="text"
        placeholder="Artists,songs or podcasts"
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <div className={`search-results ${searchResults.length > 0 ? 'active' : ''}`}>
        <ul>
          {searchResults.map((result, index) => (
            <li
              key={result.id}
              className="result-item"
              style={{ background: searchIndex === index ? "#007BFF" : "none" }}
              onMouseEnter={() => setSearchIndex(index)}
            >
              {result.title}
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Search;