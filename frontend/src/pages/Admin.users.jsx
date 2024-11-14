import React, { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import axios from "axios";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUsers = () => {
  const [user, setUser] = useState([]);
  const {authorizationToken} = useAuth();
  const getAllUsers = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/getAllUsers",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("getAll=", data);
      setUser(data);
    } catch (error) {
      console.log("Admin userError =", error);
    }
  };
  
  const handleDelete =async(id)=>{
    try {
      const response = await fetch(`http://localhost:5000/api/admin/deleteUser/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      )
      const data =await response.json()
      console.log("Users After delete", data);
      if(response.ok) {
        getAllUsers();
        // display success message
        toast.info("User deleted successfully!");
      }
    } catch (error) {
      console.log("error from handleDelete user =", error);
      
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);


  return (
    <>
      <div className="flex justify-">
        <Sidebar />
        <section className=" min-h-screen  max-w-full px-16 py-4">
          <div>
            <h1 className="text-3xl font-bold p-3">Admin User Data</h1>
          </div>

          <div className="container">
            <table className="  bg-white border box-border border-zinc-700 shadow-xl border-r-2">
              <thead>
                <tr className="  items-center box-border text-2xl text-indigo-500 mb-3 ">
                  <th>Name</th>
                  <th>Email</th>
                  
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {Array.isArray(user) && user.length > 0 ? (
                  user.map((currentUser, index) => (
                    <tr key={currentUser.id || index}>
                      <td className="text-lg p-5 px-10 text-center">{currentUser.username}</td>
                      <td className="text-lg p-5  px-10  text-center">{currentUser.email}</td>
                     
                      {/* Assuming 'phone' exists */}
                      <td className="text-lg p-5  px-10  text-center">
                        {/* Update button or link */}
                        <button className="text-blue-500">Update</button>
                      </td>
                      <td className="text-lg p-5  px-10  text-center">
                        {/* Delete button or link */}
                        <button className="text-red-500" onClick={()=>{handleDelete(currentUser._id)}}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminUsers;
