import React from 'react';

const DisplayCard = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-grid">
      {recipes.length === 0 ? (
        <p>No recipes available. Try searching with different ingredients.</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card" onClick={() => onSelectRecipe(recipe)}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>Used Ingredients: {recipe.usedIngredientCount}</p>
            <p>Missed Ingredients: {recipe.missedIngredientCount}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayCard;
