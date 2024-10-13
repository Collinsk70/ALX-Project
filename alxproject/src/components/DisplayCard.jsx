// DisplayCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayCard = ({ ingredients }) => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (ingredients) {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients`,
            {
              params: {
                ingredients: ingredients,
                number: 10,
                apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
              },
            }
          );

          // Log the response to check its structure
          console.log(response.data); // Check the structure here
          
          setRecipes(response.data);
          setError(''); // Clear any previous errors
        } catch (err) {
          setError('Failed to fetch recipes. Please try again later.');
          console.error(err);
        }
      };
      fetchRecipes();
    }
  }, [ingredients]);

  return (
    <div>
      {error && <p>{error}</p>}
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            {/* Check if ingredients exist before trying to render them */}
            {recipe.extendedIngredients ? (
              <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.name}</li>
                ))}
              </ul>
            ) : (
              <p>No ingredients available.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayCard;
