import { Brain } from "lucide-react"
import { Link } from "react-router-dom";


const LoginHeader = () => {

  return (
    <div className="flex justify-between w-full h-15 items-center">
      <div className="flex p-4">
        <Link to="/" className="pr-2 pt-0.5 hover:cursor-pointer transition-transform transform hover:scale-110 inline-block"><Brain /></Link>
        <Link to="/" className="text-black font-medium font-sans text-lg hover:cursor-pointer transition-transform transform hover:scale-105 inline-block">MindSync</Link>
      </div>
      <div className="p-4">
        <Link to="/dashboard" className="pr-8 font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block" >Dashboard</Link>
        <Link to="/journal" className="pr-8 font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block">Journal</Link>
        <Link to="/history" className="pr-8 font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block">History</Link>
        <Link to="/settings" className="font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block">Settings</Link>
      </div>
      <div className="p-4">
        <button className="bg-black h-9 w-20 rounded-md text-white font-medium hover:bg-gray-800 hover:cursor-pointer transition-transform duration-200 transform hover:scale-110">
          Logout
        </button>
      </div>
    </div>
  )
}

export default LoginHeader