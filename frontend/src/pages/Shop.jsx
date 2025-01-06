import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Product from "./Product";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/admin/getProducts"
      );
      const data = response.data;
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(product);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  // const toggleSubCategory =(e)=>{

  // }
  const applyFilter = () => {
    let productCopy = product.slice();
    if (category.length > 0) {
      console.log("Category Filter = ", category);
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProducts(productCopy);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    applyFilter();
  }, [category]);

  return (
    <div className="">
      <div className="bg-gray-200 py-5 text-2xl font-semibold opacity-55 ">
        <Container>
          <h1>SHOP</h1>
        </Container>
      </div>
      <Container className="py-5 flex">
        <div className="flex flex-col gap-10 py-10">
          <div>
            <p className="font-semibold py-5">Category</p>

            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 "
                onChange={toggleCategory}
                value={"Men"}
              />{" "}
              MEN
            </p>

            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleCategory}
                value={"Women"}
              />{" "}
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                onChange={toggleCategory}
                value={"Kids"}
              />{" "}
              KIDS
            </p>
          </div>

          <div>
            <p className="font-semibold py-5">Material</p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Fabric"} /> Fabric
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Polyster"} />{" "}
              Polyster
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Cotton"} /> Cotton
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Mix Cotton"} /> Mix
              Cotton
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          {/* Product Count */}
          <div className="mb-4 text-sm font-semibold opacity-50 text-gray-700  py5">
            {Array.isArray(filterProducts) && filterProducts.length > 0
              ? `Showing 1 - ${filterProducts.length} products of ${product.length} results `
              : `Showing 1 - ${product.length} products products of ${product.length} results`}
          </div>

          {Array.isArray(filterProducts) && filterProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-500 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filterProducts.map((item) => (
                <Product key={item?._id} item={item} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 text-gray-500 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {product.map((item) => (
                <Product key={item?._id} item={item} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Shop;
