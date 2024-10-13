import React, { useState } from 'react';
import Search from './components/Search';
import DisplayCard from './components/DisplayCard';
import Navbar from './components/Navbar';
import RecipieDetail from './components/RecipieDetail';

const mockRecipes = [
  { id: 1, name: 'Spaghetti Bolognese', ingredients: ['spaghetti', 'minced meat', 'tomato'], instructions: 'Cook spaghetti, add minced meat and sauce.' },
  { id: 2, name: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'coconut milk'], instructions: 'Cook chicken, add curry powder and coconut milk.' },
  // Add more mock recipes
];

function App() {
  const [recipes, setRecipes] = useState(mockRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (query) => {
    // Filter or fetch recipes based on the query
    const filteredRecipes = mockRecipes.filter(recipe =>
      recipe.ingredients.some(ingredient => ingredient.includes(query.toLowerCase()))
    );
    setRecipes(filteredRecipes);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <>
      <Navbar />
      <Search onSearch={handleSearch} />
      <DisplayCard recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      <RecipieDetail recipe={selectedRecipe} />
    </>
  );
}

export default App;
