import React from "react";

const RecipeDetail = ({ recipe, closeDetails, toggleFavourite, deleteRecipe }) => {
  if (!recipe) return null; 

  return (
    <div className="recipe-detail">
      <div className="detail-content">
        <h2>{recipe.title}</h2>
        {recipe.favourite && <span className="heart">❤️ Favourite</span>}
        <p>
          <strong>Category:</strong> {recipe.category}
        </p>
        <p>
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
        <p>
          <strong>Instructions:</strong> {recipe.instructions}
        </p>

        <div className="detail-buttons">
          <button
            onClick={() => {
              toggleFavourite(recipe.id); 
            }}
          >
            {recipe.favourite ? "Unfavourite" : "Favourite"}
          </button>
          <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          <button onClick={closeDetails}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
