import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Admin_Layout from "./Layout/Admin_Layout";
import Error from "./pages/Error";
import AdminUsers from "./pages/Admin.users";
import AdminProduct from "./pages/Admin.product";
import AdminProductView from "./pages/Admin.ProductView";
import SingleProduct from "./pages/SingleProduct";
import { ThemeProvider } from "../Context API/DarkLight";
import { persistor, store } from "./Redux/store";
import { Provider } from "react-redux";
import CartPage from "./pages/CartPage";
import { PersistGate } from "redux-persist/integration/react";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ThemeProvider>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
            <Route path="/admin" element={<Admin_Layout />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/addproducts" element={<AdminProduct />} />
            <Route path="/admin/viewproducts" element={<AdminProductView />} />
            <Route path="/Cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </PersistGate>
        </Provider>
       
      </ThemeProvider>
    </>
  );
}

export default App;
