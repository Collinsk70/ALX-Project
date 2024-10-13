import React from 'react';

function RecipeDetails({ recipe }) {
  if (!recipe) {
    return <div>Select a recipe to view details</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;
