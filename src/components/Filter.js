import React from "react";

const Filter = ({ filters, setFilters }) => {
  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setFilters({ ...filters, category: e.target.value });
  };

  return (
    <div>
      <h3>Filter Recipes</h3>
      <div className="search-category">
      <input
        type="text"
        placeholder="Search by title"
        value={filters.search}
        onChange={handleSearchChange}
      />
      <select value={filters.category} onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>
      </div>
    </div>
  );
};

export default Filter;
