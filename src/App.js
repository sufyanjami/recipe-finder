import React, { useState } from "react";
import IngredientInput from "./components/IngredientInput";
import RecipeList from "./components/RecipeList";
import "./styles.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = (ingredients) => {
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=e93b6360dcbf4ffe8780ee69e92a8500`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      });
  };

  return (
    <div className="App">
      <h1>Recipe Finder by Sufyan.</h1>
      <div className="inputContainer">
        <IngredientInput onSearch={fetchRecipes} />
      </div>
      <br />
      <div className="recipesContainer">
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
