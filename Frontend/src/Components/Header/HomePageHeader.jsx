import { Brain } from "lucide-react"
import { Link, useNavigate } from "react-router-dom";

const HomePageHeader = () => {

    const navigate = useNavigate();
    
    return (
        <div className="flex justify-between w-full h-15 items-center">
            <div className="flex p-4">
                <Link to="/" className="pr-2 pt-0.5 hover:cursor-pointer transition-transform transform hover:scale-110 inline-block"><Brain /></Link>
                <Link to="/" className="text-black font-medium font-sans text-lg hover:cursor-pointer transition-transform transform hover:scale-105 inline-block">MindSync</Link>
            </div>
            <div className="p-4">
                <Link to="/" className="pr-8 font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block" >Home</Link>
                <Link to="/features" className="pr-8 font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block">Features</Link>
                <Link to="/about" className="pr-8 font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block">About</Link>
                <Link to="/contact" className="font-medium text-gray-700 hover:text-black transition-transform transform hover:scale-110 inline-block">Contact</Link>
            </div>
            <div className="p-4">
                <button onClick={()=>(navigate("/login"))} className="pr-2 font-medium text-gray-700 w-20 h-8 hover:cursor-pointer hover:text-black transition-transform duration-200 transform hover:scale-110">
                    Sign In
                </button>
                <button onClick={()=>(navigate("/signup"))} className="bg-black h-9 w-30 rounded-md text-white font-medium hover:bg-gray-800 hover:cursor-pointer transition-transform duration-200 transform hover:scale-110">
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default HomePageHeader