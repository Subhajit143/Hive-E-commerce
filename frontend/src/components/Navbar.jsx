import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
import HiveLogo from "../assets/newlogo2-Black.png";
import SearchInput from "./SearchInput.jsx";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { RiMenu4Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import Container from "./Container.jsx";
import { MdAdminPanelSettings } from "react-icons/md";

const Navbar = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const { products } = useSelector((state) => state.hive.cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleToggleClose = () => {
    setIsOpen(false);
  };

  console.log("Products from redux in navbar", products);

  return (
    <div
      className={`sticky top-0 backdrop-blur-md z-50  shadow-md hover:bg-white duration-900`}
      onMouseEnter={handleToggleOpen}
      onMouseLeave={handleToggleClose}
    >
      {/* Main Navbar */}
      <div className="group relative">
        <Container className="flex justify-between text-gray-700 items-center lg:gap-7">
          {/* Navigation Links */}
          <div className="flex-1  ">
            {isOpen ? (
              <nav className="py-5  transition-all ease-in-out duration-500 ">
                <ul className="flex gap-12 text-sm font-semibold">
                  <li>
                    <NavLink className="" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/shop">
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/pages">
                      Pages
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="" to="/element">
                      Elements
                    </NavLink>
                  </li>
                </ul>
              </nav>
            ) : (
              <div className="text-3xl cursor-pointer">
                <RiMenu4Line />
              </div>
            )}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 py-3">
            <NavLink to="/">
              <img src={HiveLogo} alt="Logo" className="w-[6.5rem]" />
            </NavLink>
          </div>

          {/* Right Section */}
          <div className="flex-1 flex justify-end">
            {isOpen ? (
              <ul className="flex gap-12 py-5 px-5 font-semibold">
                {isLoggedIn ? (
                  <>
                    {isAdmin && (
                      <li>
                        <NavLink to="/admin">
                          {/* <button className=" text-black py-2 px-5 rounded-lg">
                            Admin
                          </button> */}
                          <MdAdminPanelSettings className="h-8 w-8"/>
                        </NavLink>
                      </li>
                    )}
                    <li className="text-2xl flex place-items-center ">
                      <NavLink to="/logout">
                        <BiLogOut />
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login">
                        <button className="uppercase py-2 px-5 text-sm rounded-lg">
                          Login
                        </button>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">
                        <button className="uppercase py-2 px-3 text-sm rounded-lg">
                          Register
                        </button>
                      </NavLink>
                    </li>
                  </>
                )}

                <li className="text-2xl  flex place-items-center relative">
                  <NavLink to={"/Cart"}>
                    <BsCartCheckFill />
                    <span className="absolute -right-2 -top-0 w-4 h-4 rounded-full text-[12px] text-white flex items-center justify-center bg-slate-800">
                      {products?.length > 0 ? products.length : 0}
                    </span>
                  </NavLink>
                </li>
              </ul>
            ) : (
              <div className="px-5 py-5">
                <li className="text-2xl  flex place-items-center relative">
                  <NavLink to={"/Cart"}>
                    <BsCartCheckFill />
                    <span className="absolute -right-2 -top-1.5 w-4 h-4 rounded-full text-[12px] text-white flex items-center justify-center bg-slate-800">
                      {products?.length > 0 ? products.length : 0}
                    </span>
                  </NavLink>
                </li>
              </div>
            )}
          </div>
        </Container>

        <hr className="border-t border-black opacity-20 " />
        {/* Hover Dropdown */}
        <div className="absolute left-0 right-0 z-10">
        <div
          className="  bg-white  backdrop-blur-md shadow-lg 
    opacity-0 translate-y-0 invisible 
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible 
    transition-opacity   ease-in duration-700"
        >
          <nav className="py-5">
            <ul className="flex justify-center gap-12 text-sm font-semibold">
              <li>
                <NavLink className="hover:text-black " to="/">
                  New Arrivals
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-black" to="/shop">
                  Cult Favorites
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-black" to="/pages">
                  Clothing
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-black "
                  to="/element"
                >
                  Pants
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-black "
                  to="/element"
                >
                  Denim
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-yellow-400 "
                  to="/element"
                >
                  Tees
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-yellow-400 "
                  to="/element"
                >
                  Sweater
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </div>

      <hr className="border-t border-black opacity-20" />
    </div>
  );
};

export default Navbar;
