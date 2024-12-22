import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import Product from "./Product";
import axios from "axios";

const CategoryHome = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Default category is "all"

  // Fetch data from API
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/getProducts");
      const data = response?.data;
      setProducts(data);
      setFilteredProducts(data); // Initially show all products
    } catch (error) {
      console.log("Product Fetching Error - ", error);
    }
  };

  // Handle category selection
  const handleCategory = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      {/* Navbar for categories */}
      <div>
        <nav className="py-5 w-full">
          <ul className="flex gap-12 text-sm text-gray-300 font-semibold">
            <li>
              <NavLink
                className="hover:text-yellow-400 duration-700 cursor-pointer"
                onClick={() => handleCategory("all")}
              >
                All
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 duration-700 cursor-pointer"
                onClick={() => handleCategory("Men")}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 duration-700 cursor-pointer"
                onClick={() => handleCategory("Women")}
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-yellow-400 duration-700 cursor-pointer"
                onClick={() => handleCategory("Kids")}
              >
                Kids
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Display filtered products */}
      <div className="w-full py-10">
  {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-500 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((item) => (
        <Product key={item?._id} item={item} />
      ))}
    </div>
  ) : (
    <p>No products found for the selected category.</p>
  )}
</div>

    </Container>
  );
};

export default CategoryHome;
