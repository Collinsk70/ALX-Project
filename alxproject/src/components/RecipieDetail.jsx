import React from 'react';

const RecipieDetail = ({ recipe, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />

        {/* Display additional details */}
        {recipe.extendedIngredients && (
          <div>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="instructions">
          <h3>Instructions:</h3>
          {recipe.instructions ? (
            <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          ) : (
            <p>No instructions available for this recipe.</p>
          )}
        </div>

        {/* Display nutritional information if available */}
        {recipe.nutrition && recipe.nutrition.nutrients && (
          <div className="nutrition">
            <h3>Nutritional Information:</h3>
            <ul>
              {recipe.nutrition.nutrients.map((nutrient) => (
                <li key={nutrient.name}>
                  {nutrient.name}: {nutrient.amount}{nutrient.unit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipieDetail;
