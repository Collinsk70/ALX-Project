import React, { useState } from 'react';
import Search from './components/Search';
import DisplayCard from './components/DisplayCard';
import Navbar from './components/Navbar';
import RecipieDetail from './components/RecipieDetail';
import axios from 'axios';

const API_KEY = ""; // Ensure to set your API key in .env

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for error handling

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null); // Reset error state before new search
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients: query,
          number: 10, // Number of recipes to fetch
          apiKey: API_KEY,
        },
      });
      // Check if there are recipes found
      if (response.data.length === 0) {
        setError("No recipes found. Please try different ingredients.");
      } else {
        setRecipes(response.data);
      }
    } catch (error) {
      // Handle errors based on status codes or general network errors
      if (error.response) {
        // The request was made and the server responded with a status code
        setError(`Error: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError("Error: No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an error
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRecipe = async (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      {loading ? <p>Loading...</p> : (
        error ? <p style={{ color: 'red' }}>{error}</p> : <DisplayCard recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      )}
      <RecipieDetail recipe={selectedRecipe} />
    </>
  );
}

export default App;
