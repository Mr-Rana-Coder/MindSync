import { Brain } from "lucide-react"
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { persistor, store } from "../../Store/store";
import { logout } from "../../Store/authSlice";
import { api } from "../../Api/baseApi";

const LoginHeader = () => {
  const navigate = useNavigate();

  const logoutButton = async () => {
    try {
      const response = await api.post("/users/logout")  
      if (response.status === 200) {
        store.dispatch(logout());
        persistor.purge();
        navigate("/");
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex justify-between w-full h-15 items-center">
      <div className="flex p-4">
        <Link to="/dashboard" className="pr-2 pt-0.5 hover:cursor-pointer transition-transform transform hover:scale-110 inline-block"><Brain /></Link>
        <Link to="/dashboard" className="text-black font-medium font-sans text-lg hover:cursor-pointer transition-transform transform hover:scale-105 inline-block">MindSync</Link>
      </div>
      <div className="p-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `pr-8 font-medium transition-transform transform hover:scale-110 inline-block ${isActive ? "text-black" : "text-gray-700 hover:text-black"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/journal"
          className={({ isActive }) =>
            `pr-8 font-medium transition-transform transform hover:scale-110 inline-block ${isActive ? "text-black" : "text-gray-700 hover:text-black"
            }`
          }
        >
          Journal
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `pr-8 font-medium transition-transform transform hover:scale-110 inline-block ${isActive ? "text-black" : "text-gray-700 hover:text-black"
            }`
          }
        >
          History
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `pr-8 font-medium transition-transform transform hover:scale-110 inline-block ${isActive ? "text-black" : "text-gray-700 hover:text-black"
            }`
          }
        >
          Settings
        </NavLink>
      </div>
      <div className="p-4">
        <button onClick={() => logoutButton()} className="bg-black h-9 w-20 rounded-md text-white font-medium hover:bg-gray-800 hover:cursor-pointer transition-transform duration-200 transform hover:scale-110">
          Logout
        </button>
      </div>
    </div>
  )
}

export default LoginHeader