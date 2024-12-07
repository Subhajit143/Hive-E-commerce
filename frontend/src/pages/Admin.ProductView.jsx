import React,{useEffect, useState} from 'react'
import { Sidebar } from '../components/Sidebar'
import { useAuth } from '../store/auth'
import {toast} from 'react-toastify'
import axios from 'axios'


function AdminProductView() {
  const {authorizationToken}=useAuth()
  const [products,setProducts]= useState()
  
  const getProduct=async()=>{
    try {
      const response = await axios.get("http://localhost:5000/api/admin/getProducts");
      
      const data= response.data;
      
      setProducts(data)
      console.log("ProductView : ", products);
    } catch (error) {
      console.log("error getting product =",error);
      
    }
  }
  const handleDelete=async(id)=>{
      try {
        const response=await fetch (`http://localhost:5000/api/admin/deleteProduct/${id}`,{
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
         
        })
        const data=await response.json();
        console.log((`Product After delete ${data}`));
        if(response.ok){
          getProduct();
           toast.info("Product deleted successfully!");
        }
      } catch (error) {
        console.log(error);
        
      }
  }
  useEffect(()=>{
    getProduct();
  },[]);

  return (
    <div className='flex'>
      <Sidebar />
      <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Admin - Product List</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Catagory</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.length > 0 ?(
          products.map((product,index) => (
            <tr key={product.id ||index}>
              <td className="border px-4 py-2">
                <img
                  // src={product.imageUrl}
                  src={product.imageUrl[0]}
                  alt={product.title}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  // onClick={() => handleUpdate(product.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ):(<tr>
          <td colSpan="5" className="text-center">
            No users found.
          </td>
        </tr>)}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default AdminProductView