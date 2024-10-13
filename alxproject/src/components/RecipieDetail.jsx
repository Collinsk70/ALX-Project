import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '11df7fa7e89947f18294dffe0a2573e6 '; // Replace with your actual API key

function RecipeDetails({ recipe }) {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (recipe) {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
            params: { apiKey: API_KEY },
          });
          setRecipeDetails(response.data);
        } catch (error) {
          console.error("Error fetching recipe details:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRecipeDetails();
  }, [recipe]);

  if (loading) {
    return <div>Loading recipe details...</div>;
  }

  if (!recipeDetails) {
    return <div>Select a recipe to view details</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <p><strong>Ingredients:</strong> {recipeDetails.extendedIngredients.map(ing => ing.name).join(', ')}</p>
      <p><strong>Instructions:</strong> {recipeDetails.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
