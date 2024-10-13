import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import DisplayCard from './components/DisplayCard';
import RecipieDetail from './components/RecipieDetail';
import axios from 'axios';

const API_KEY = "";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
        params: {
          ingredients: query,
          number: 10,
          apiKey: API_KEY,
        },
      });

      if (response.data.length === 0) {
        setError("No recipes found. Please try different ingredients.");
      } else {
        setRecipes(response.data);
      }
    } catch (error) {
      if (error.response) {
        setError(`Error: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        setError("Error: No response received from the server.");
      } else {
        setError(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSelectRecipe = async (recipe) => {
    setLoading(true);
    try {
      // Fetch recipe details, including instructions and nutrition information
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
        params: {
          apiKey: API_KEY,
          includeNutrition: true, // Include nutrition data
        },
      });
      setSelectedRecipe(response.data); // Set the full recipe data, including nutrition
    } catch (error) {
      console.error("Failed to fetch recipe details", error);
      setError("Failed to fetch recipe details.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        error ? <p style={{ color: 'red' }}>{error}</p> : <DisplayCard recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      )}
  
      {/* Render the modal with recipe details */}
      {selectedRecipe && (
        <RecipieDetail recipe={selectedRecipe} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
