// src/components/RecipeList.js
import React from "react";

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.title}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
