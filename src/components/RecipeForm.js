import React, { useState } from "react";

const RecipeForm = ({ addRecipe, closeForm }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "Breakfast",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ ...formData, id: Date.now(), favourite: false });
    setFormData({
      title: "",
      ingredients: "",
      instructions: "",
      category: "Breakfast",
    });
  };

  return (
    <div className="form-overlay">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <h2>Add Recipe</h2>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <label>Ingredients:</label>
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <label>Instructions:</label>
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Dessert</option>
        </select>
        <div className="form-actions">
          <button type="submit">Save Recipe</button>
          <button type="button" onClick={closeForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
