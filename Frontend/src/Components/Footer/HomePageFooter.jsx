import { Brain } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const HomePageFooter = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='w-full h-70 bg-gray-800 '>
                <div className='text-white text-center p-17'>
                    <p className='font-medium text-3xl font-sans'>Start Your Journey to Better Mental Health</p>
                    <p className='text-md font-medium font-sans pt-2 pb-4'>Join thousands of users who have transformed their emotional wellbeing with <br /> MindSync</p>
                    <button onClick={()=>navigate("/signup")}  className="bg-white h-9 w-40 rounded-md text-black font-medium hover:bg-gray-200 hover:cursor-pointer transition-transform duration-200 transform hover:scale-110">Get Started Free</button>
                </div>
            </div>
            <div className="w-full h-60">
                <div className='flex justify-between pt-8 pl-40'>
                    <div className='w-1/4'>
                        <div className='flex pb-3'>
                            <Link to="/" className="pr-2 pt-0.5 hover:cursor-pointer transition-transform transform hover:scale-110 inline-block"><Brain /></Link>
                            <Link to="/" className="text-black font-medium font-sans text-lg hover:cursor-pointer transition-transform transform hover:scale-105 inline-block">MindSync</Link>
                        </div>
                        <p className="text-gray-700 font-medium ">
                            Your Personal companion for <br />emotional wellbeing and mental <br /> health tracking.
                        </p>
                    </div>
                    <div className='w-1/4'>
                        <p className="pb-3 text-black font-medium font-sans text-lg">Product</p>
                        <p className="text-gray-700 font-medium font-sans ">Features</p>
                        <p className="text-gray-700 font-medium font-sans">Pricing</p>
                        <p className="text-gray-700 font-medium font-sans">Updates</p>
                    </div>
                    <div className='w-1/4 '>
                        <p className="pb-3 text-black font-medium font-sans text-lg">Support</p>
                        <p className="text-gray-700 font-medium font-sans">Help Center</p>
                        <p className="text-gray-700 font-medium font-sans">Contact Us</p>
                        <p className="text-gray-700 font-medium font-sans">Privacy</p>
                    </div>
                    <div className='w-1/4'>
                        <p className="pb-3 text-black font-medium font-sans text-lg">Connect</p>
                        <div className="flex">
                            <div className="w-8 h-8 rounded-full bg-gray-800  flex justify-center items-center mr-3 hover:cursor-pointer transition-transform transform hover:scale-110">
                                <a href="https://x.com/8055_rana" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg></a>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-800  flex justify-center items-center mr-3 hover:cursor-pointer transition-transform transform hover:scale-110">
                                <a href="https://x.com/8055_rana" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </a>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-800  flex justify-center items-center hover:cursor-pointer transition-transform transform hover:scale-110">
                                <a href="https://www.linkedin.com/in/sahilll-ranaaa/" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-7">
                    <hr className="w-350 border-t-2 border-gray-200" />
                </div>
                <div>
                    <p className="text-gray-700 font-medium font-sans text-center pb-5 ">2025 MindSync. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePageFooter