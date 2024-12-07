import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import CategoryDropdown from "./CategoryDropdown";
import axios from "axios"
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify'
import { IoMdCloudDownload } from "react-icons/io";



const AdminProduct = () => {
  const {authorizationToken}=useAuth()
  const [formdata, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image1:"",
    image2:"",
    image3:"",
    category: "",
    stock: "",
  });
  
  
  
  const handleCategory = (e) => {
    setFormData({ ...formdata, category: e.target.value });
  };

  const handleInputImage = (e) => {
    e.preventDefault();
    const {id,files}=e.target;
    setFormData({...formdata, [id]: files[0] });
   
  };
  console.log(formdata);
  const handleInput = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formdata, [id]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formdata.name ||
      !formdata.description ||
      !formdata.price ||
      !formdata.image1 ||
      !formdata.image2 ||
      !formdata.image3 ||
      !formdata.category ||
      !formdata.stock
    ) {
      alert("Please fill all the fields");
      return;
    }

    //Prepare form data for submission
    const data= new FormData()
    data.append("name", formdata.name)
    data.append("description", formdata.description)
    data.append("price", formdata.price)
    data.append("image1", formdata.image1)
    data.append("image2", formdata.image2)
    data.append("image3", formdata.image3)
    data.append("category", formdata.category)
    data.append("stock", formdata.stock)
    try {
      const response=await axios.post("http://localhost:5000/api/admin/addProduct",
       data,
        { headers:{
          "Authorization": authorizationToken,
          // "Content-type":"multipart/form-data"
        },
    })
    toast.success("Product successfully added")
    
    //Reset Form After submission
    setFormData({
      name: "",
    description: "",
    price: "",
    image1:null,
    image2:null,
    image3:null,
    category: "",
    stock: "",
    });
    console.log("Added Product successfully");
    
      
    } catch (error) {
      if (error.response) {
        console.error("Error Response:", error.response.data);
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
      
    }
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-1/2 mx-auto p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          
              {/* Image/File */}
              <div className="flex flex-wrap items-center gap-5">
            {["image1","image2","image3"].map((imageId)=>(
               <label htmlFor={imageId} key={imageId}>
                <div className="text-gray-500 border-2 border-dashed border-gray-500 px-4 py-2 hover:border-black duration-300 ease-in-out cursor-pointer rounded-md">
                {formdata[imageId]? (
                  <img
                src={URL.createObjectURL(formdata[imageId])} alt="preview" className="w-20 h-20 object-cover mb-2 rounded-md"/>):(
                  <IoMdCloudDownload className='text-5xl'/>
                )}
                <input type="file" hidden id={imageId} onChange={handleInputImage} />
                <p>{formdata[imageId] ? "Change":"Upload"}</p>
                </div>
               </label>
            ))}
          </div>


          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formdata.name}
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleInput}
              value={formdata.description}
              required
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 mb-2">
              Price (₹)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              min="0"
              step="0.01"
              onChange={handleInput}
              value={formdata.price}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

      

          {/* Category */}
          {/* <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            onChange={handleInput}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div> */}
          <CategoryDropdown
            selectedCategory={formdata.category}
            onChange={handleCategory}
          />

          {/* Stock */}
          <div className="mb-6">
            <label htmlFor="stock" className="block text-gray-700 mb-2">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              value={formdata.stock}
              onChange={handleInput}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProduct;
