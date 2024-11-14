import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
import HiveLogo from "../assets/logo2.png";
import SearchInput from "./SearchInput.jsx";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  return (
    <div>
      <div className=" container items-center bg-slate-50 flex  justify-between max-w-full px-10 shadow-orange-400  drop-shadow-lg shadow-orange-500 ">
        <div>
          <NavLink to="/">
            <img src={HiveLogo} alt="" className=" w-32" />
          </NavLink>
        </div>

        <SearchInput />
        <div className="hidden md:inline-flex px-7 items-center lg:gap-7 ">
          <nav className="py-5">
            <ul className="flex gap-12 text-lg font-semibold ">
              <li className="relative group overflow-hidden ">
                <NavLink
                  className="hover:text-yellow-400 cursor-pointer duration-700"
                  to="/"
                >
                  Home
                </NavLink>
                <span className="absolute bottom-0 left-0 inline-block w-full h-px bg-slate-800 -translate-x-[110%] group-hover:translate-x-0 duration-300 " />
              </li>
              <li className="relative group overflow-hidden ">
                <NavLink
                  className="hover:text-yellow-400 cursor-pointer duration-700"
                  to="/men"
                >
                  Men
                </NavLink>
                <span className="absolute bottom-0 left-0 inline-block w-full h-px bg-slate-800 -translate-x-[110%] group-hover:translate-x-0 duration-300 " />
              </li>
              <li className="relative group overflow-hidden ">
                <NavLink
                  className="hover:text-yellow-400 cursor-pointer duration-700"
                  to="/women"
                >
                  Women
                </NavLink>
                <span className="absolute bottom-0 left-0 inline-block w-full h-px bg-slate-800 -translate-x-[110%] group-hover:translate-x-0 duration-300 " />
              </li>
              <li className="relative group overflow-hidden ">
                <NavLink
                  className="hover:text-yellow-400 cursor-pointer duration-700"
                  to="/kids"
                >
                  Kids
                </NavLink>
                <span className="absolute bottom-0 left-0 inline-block w-full h-px bg-slate-800 -translate-x-[110%] group-hover:translate-x-0 duration-300 " />
              </li>
            </ul>
          </nav>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="group peer ring-0 bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600 rounded-full outline-none duration-1000 after:duration-300 w-12 h-6 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-white after:outline-none after:h-5 after:w-5 after:top-0.5 after:left-0.5 peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-neutral-500 peer-checked:to-neutral-600"></div>
          </label>
          <ul className="flex gap-12 py-5 px-5 font-semibold">
            <li className="text-2xl flex place-items-center relative">
              <button>
                <BsCartCheckFill />
                <span className="absolute -right-2 -top-0 w-4 h-4 rounded-full text-[12px]  text-white flex items-center justify-center bg-slate-800">
                  5
                </span>
              </button>
            </li>
            {isLoggedIn ? (
              <>
                <li className="text-2xl flex place-items-center ">
                  <NavLink to="/logout">
                    <BiLogOut />
                    {/* <button className='bg-yellow-400 py-2 px-5 rounded-lg'>Logout</button>  */}
                  </NavLink>
                </li>
                {isAdmin ? (
                  <>
                    <li>
                      <NavLink to="/admin">
                        <button className="bg-blue-600 text-white py-2 px-5 rounded-lg">
                          Admin
                        </button>
                      </NavLink>
                    </li>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">
                    <button className="bg-yellow-400 py-2 px-5 rounded-lg">
                      Login
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register">
                    <button className="bg-yellow-400 py-2 px-3 rounded-lg">
                      Register
                    </button>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
