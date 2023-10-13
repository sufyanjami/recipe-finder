// src/components/IngredientInput.js
import React, { useState } from "react";

const IngredientInput = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Enter ingredients separated by commas..."
      />
      <button type="submit">Find Recipes</button>
    </form>
  );
};

export default IngredientInput;
