import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import DisplayCard from './components/DisplayCard';
import RecipieDetail from './components/RecipieDetail';
import About from './components/About';
import Contacts from './components/Contacts';
import axios from 'axios';

const API_KEY = ""; // Add your API key here

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isContactsModalOpen, setIsContactsModalOpen] = useState(false); // State for Contacts modal

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

  const handleAboutClick = () => {
    setIsAboutModalOpen(true); // Open the About modal
  };

  const handleCloseAboutModal = () => {
    setIsAboutModalOpen(false); // Close the About modal
  };

  // Function to open and close the Contacts modal
  const handleContactsClick = () => {
    setIsContactsModalOpen(true); // Open the Contacts modal
  };

  const handleCloseContactsModal = () => {
    setIsContactsModalOpen(false); // Close the Contacts modal
  };

  return (
    <>
      <Navbar onAboutClick={handleAboutClick} onContactsClick={handleContactsClick} />
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

      {/* Render the About modal */}
      {isAboutModalOpen && (
        <About onClose={handleCloseAboutModal} />
      )}

      {/* Render the Contacts modal */}
      {isContactsModalOpen && (
        <Contacts onClose={handleCloseContactsModal} />
      )}
    </>
  );
}

export default App;
