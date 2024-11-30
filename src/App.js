import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import RecipeForm from "./components/RecipeForm";
import RecipeDetail from "./components/RecipeDetail";
import Filter from "./components/Filter";
import "./styles.css";

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filters, setFilters] = useState(() => {
    const savedFilters = localStorage.getItem("filters");
    return savedFilters ? JSON.parse(savedFilters) : { category: "All", search: "" };
  });
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters));
  }, [filters]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
    setShowForm(false);
    showNotification("Recipe added successfully!");
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id != id));
    setSelectedRecipe(null);
    showNotification("Recipe deleted successfully!");
  };

  const toggleFavourite = (id) => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id == id ? { ...recipe, favourite: !recipe.favourite } : recipe
    );
    setRecipes(updatedRecipes);

    const updatedRecipe = updatedRecipes.find((recipe) => recipe.id == id);
    if (selectedRecipe && selectedRecipe.id == id) {
      setSelectedRecipe(updatedRecipe);
    }
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      document.querySelector(".notification").classList.add("hide");
      setTimeout(() => setNotification(""), 500);
    }, 2000);
  };

  const closeDetails = () => {
    setSelectedRecipe(null);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = filters.category == "All" || recipe.category == filters.category;
    const matchesSearch = !filters.search || recipe.title.toLowerCase().includes(filters.search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="App">
      <h1>Recipe Book</h1>

      {notification && <div className="notification">{notification}</div>}

      <div className="add-recipe-section">
        <button onClick={() => setShowForm(true)}>Add New Recipe</button>
        {showForm && (
          <RecipeForm addRecipe={addRecipe} closeForm={() => setShowForm(false)} />
        )}
      </div>

      <div className="main-container">
        <div className="filter-sidebar">
          <Filter filters={filters} setFilters={setFilters} />
        </div>

        <div className="recipe-list-container">
          <RecipeList
            recipes={filteredRecipes}
            selectRecipe={setSelectedRecipe}
            toggleFavourite={toggleFavourite}
          />
        </div>
      </div>

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          closeDetails={closeDetails}
          deleteRecipe={deleteRecipe}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
