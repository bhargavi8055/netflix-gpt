import { useState } from "react";
import Header from "./Header";

const Login = ()=>{
    const [isSignInForm,setIsSignInForm] = useState(true)
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg"
                alt="background-image"
                />
            </div>
            <form 
            className="bg-black p-12 absolute w-4/12 my-32 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
                <h1 className="font-bold text-3xl py-2">{isSignInForm? "Sign In":"Sign Up"} </h1>
                
                {
                    !isSignInForm && 
                    <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="p-2 my-4 w-full bg-gray-900 rounded-md" />
                }
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="p-2 my-4 w-full bg-gray-900 rounded-md" />
              
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="p-2 my-4 w-full bg-gray-900 rounded-md" />
                <button 
                    className="p-2 my-6 bg-red-700 w-full rounded-md"
                    >{isSignInForm? "Sign In":"Sign Up"} 
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to NetflixGPT? Sign Up Now":"Already registered? SignIn Now"}</p>
            </form>
        </div>
    )
}

export default Login;