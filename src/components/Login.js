import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidate,checkValidateSignUp } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = ()=>{
    const [isSignInForm,setIsSignInForm] = useState(true);

    const [errorMessage,setErrorMessage] = useState(null);
    
    const navigate = useNavigate();
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
    const dispatch = useDispatch();
    const handleButtonClick = ()=>{
        
        let err;
        err=  checkValidate(email.current.value,password.current.value);
        // if(isSignInForm){

        //      err=  checkValidate(email.current.value,password.current.value);
        // }
        // else{
        //      err=  checkValidateSignUp(email.current.value,password.current.value,name.current.value);
        // }
        
       setErrorMessage(err);
       if(err) return;
       if(!isSignInForm){
        //Sign Up Logic
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            updateProfile(user,{
                displayName:name.current.value,
                photoURL:"https://media.licdn.com/dms/image/v2/D5635AQGlfCAPhtRkcw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1695629800382?e=1733493600&v=beta&t=ikxfrrw5ETybQ_gRXRGxfnd7e5rewoyJAoETMtfzzzw"
            })
            .then(()=>{
                const {uid,email,displayName,photoURL} = auth.currentUser ;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse");
            })
            .catch((error)=>{
                setErrorMessage(error.message)
            })
            
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            setErrorMessage(errorCode+"=="+errorMessage)
        })
       }
       else{
        //Sign In Logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            
            navigate("/browse");
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            setErrorMessage(errorCode+"=="+errorMessage)
        })
       }
    }
    const name = useRef()
    const email = useRef()
    const password = useRef()
    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg"
                alt="background-image"
                />
            </div>
            <form onSubmit={(e)=>e.preventDefault()}
            className="bg-black p-12 absolute w-4/12 my-32 mx-auto right-0 left-0 text-white rounded-md bg-opacity-80">
                <h1 className="font-bold text-3xl py-2">{isSignInForm? "Sign In":"Sign Up"} </h1>
                
                {
                    !isSignInForm && 
                    <input 
                    ref={name}
                    type="text" 
                    placeholder="Full Name" 
                    className="p-2 my-4 w-full bg-gray-900 rounded-md" />
                }
                <input 
                    type="text" 
                    ref={email}
                    placeholder="Email Address" 
                    className="p-2 my-4 w-full bg-gray-900 rounded-md" />
              
                <input 
                    type="password" 
                    ref={password}
                    placeholder="Password" 
                    className="p-2 my-4 w-full bg-gray-900 rounded-md" />

                <p className="font-bold text-md text-red-600">{errorMessage?errorMessage:""}</p>
                <button 
                    className="p-2 my-6 bg-red-700 w-full rounded-md"
                    onClick={handleButtonClick}
                    >{isSignInForm? "Sign In":"Sign Up"} 
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to NetflixGPT? Sign Up Now":"Already registered? SignIn Now"}</p>
            </form>
        </div>
    )
}

export default Login;