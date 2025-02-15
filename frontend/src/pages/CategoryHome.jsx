import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { NavLink } from "react-router-dom";
import Product from "./Product";
import axios from "axios";

const CategoryHome = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/getProducts");
      const data = response?.data;
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log("Product Fetching Error - ", error);
    }
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);

    if (category === "all") {
      setFilteredProducts(products);
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-2"> {/* Increased gap here */}
            {filteredProducts.map((item) => (
              <Product key={item?.id} item={item} />
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