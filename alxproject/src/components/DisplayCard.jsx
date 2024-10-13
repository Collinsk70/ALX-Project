import React from 'react';

function DisplayCard({ recipes, onSelectRecipe }) {
  return (
    <div className="recipe-grid">
      {recipes.map(recipe => (
        <div className="recipe-card" key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
          <h3>{recipe.name}</h3>
          <p>Ingredients: {recipe.ingredients.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayCard;
