import React from "react";

const RecipeList = ({ recipes, selectRecipe, toggleFavourite }) => {
  return (
    <div>
      <h3>Recipe List</h3>
      {recipes.length == 0 ? (
        <p>No recipes available.</p>
      ) : (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="recipe-item"
              onClick={() => selectRecipe(recipe)} 
            >
              <span className="recipe-title">
                {recipe.title}{" "}
                {recipe.favourite && <span className="heart">❤️</span>}
              </span>
              <div className="recipe-buttons">
                
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    toggleFavourite(recipe.id);
                  }}
                >
                  {recipe.favourite ? "Unfavourite" : "Favourite"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
