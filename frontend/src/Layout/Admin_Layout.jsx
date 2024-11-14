import { NavLink,Link } from "react-router-dom"
// import { FaUserAstronaut } from "react-icons/fa6";
// import { BiSolidMessageDetail } from "react-icons/bi";
// import { FaServicestack } from "react-icons/fa6";
// import { RiHome6Fill } from "react-icons/ri";
import { useAuth } from "../store/auth";
import {Sidebar} from "../components/Sidebar"
import { ImUsers } from "react-icons/im";


const Admin_Layout = () => {
  const {isAdmin}=useAuth();
  if (!isAdmin) return <NavLink to="/"/>
  return (
    <>
    {/* <header className="container bg-slate-900 border  text-violet-400  justify-between max-w-full px-16 py-4 text-lg">
      <div className="container">
        <nav>
          <ul className="flex gap-5">
            <li>
              <NavLink to="/admin/users">Users</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header> */}
    <div className="flex">
    <Sidebar/>
    <div>
      <div className="container flex gap-3 p-5">

        <div className="container bg-amber-500">
          <NavLink to="/admin/users">
          <div className="text-center p-5">
          <ImUsers className="text-white text-center" />
            <h1 className="text-3xl font-bold text-white">User Details</h1>
            <p className="font-semibold">See the Users & If needed Update and Delete User Data's</p>
          </div>
          </NavLink>
          
        </div>

        <div className="container bg-amber-500">
          <NavLink to="/admin/users">
          <div className="text-center p-5">
          <ImUsers className="text-white text-center" />
            <h1 className="text-3xl font-bold text-white">Product Details</h1>
            <p className="font-semibold">See the Users & If needed Update and Delete User Data's</p>
          </div>
          </NavLink>
          
        </div>

        <div className="container bg-amber-500">
          <NavLink to="/admin/users">
          <div className="text-center p-5">
          <ImUsers className="text-white text-center" />
            <h1 className="text-3xl font-bold text-white">All Contacts</h1>
            <p className="font-semibold">See the Users & If needed Update and Delete User Data's</p>
          </div>
          </NavLink>
          
        </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Admin_Layout