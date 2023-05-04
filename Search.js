import React, { useState } from 'react';

const library = [
  { id: 1, name: 'song 1', artist: 'artist 1' },
  { id: 2, name: 'song 2', artist: 'artist 2' },
  { id: 3, name: 'song 3', artist: 'artist 3' },
  // More DATA
];

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const results = library.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search for songs..." />
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
