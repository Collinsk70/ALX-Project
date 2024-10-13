import React, { useState } from 'react';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query); // Pass the query back to the parent to fetch recipes
    }
  };

  return (
    <div className="search-container">
      <h2>Search for a recipe using ingredients</h2>
      <p>Type your base ingredients, and we will generate a recipe fit for a king...</p>
      <input 
        type="text" 
        placeholder="Enter ingredients" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
