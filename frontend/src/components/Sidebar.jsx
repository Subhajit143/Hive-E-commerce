import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="   h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-2xl font-bold">DashBoard</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul>
          <li className="mb-4">
            <Link to="/admin" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
              </svg>
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/users" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Users
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/addproducts" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1m3-1h3m4-2v2m0 0v-2m0 2h-4m-4 0H7m0 0l1-1m0 0l1-1m0 2l1 1m-2-1l1-1m0 0l1-1" />
              </svg>
             Add Products
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/admin/viewproducts" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" />
              </svg>
              View Products
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 bg-gray-900">
        <p className="text-sm">&copy; 2024 Hive. All rights reserved.</p>
      </div>
    </div>
  )
}

