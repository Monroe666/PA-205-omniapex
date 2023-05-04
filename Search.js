import React from 'react';
import { useSearch } from './fragments/useSearch';

function Search() {
  //  useSearch Hook
  const { searchResults, handleSearch } = useSearch();

  return (
    <div>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search for songs..."
      />
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
