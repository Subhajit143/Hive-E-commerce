import React from "react";

const CategoryDropdown = ({ categories=["Kids","Men","Women"], selectedCategory, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-gray-700 mb-2">
        Category
      </label>
      <select
        id="category"
        name="category"
        value={selectedCategory}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        required
      >
        <option value="" disabled>
          Select a category
        </option>
        {categories.length>0 &&
        categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))
        }
      </select>
    </div>
  );
};

export default CategoryDropdown;