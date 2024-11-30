import { useState,useRef } from "react";
import Header from "./Header";
import { checkValidate,checkValidateSignUp } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";
const Login = ()=>{
    const [isSignInForm,setIsSignInForm] = useState(true);

    const [errorMessage,setErrorMessage] = useState(null);
    
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
            updateProfile(user,{
                displayName:name.current.value,
                photoURL:USER_AVATAR
            })
            .then(()=>{
                const {uid,email,displayName,photoURL} = auth.currentUser ;
                console.log("in login")
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
               
            })
            .catch((error)=>{
                setErrorMessage(error.message)
            })
            
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"=="+errorMessage)
        })
       }
       else{
        //Sign In Logic
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
            const user = userCredential.user;
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
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
                src={BG_URL}
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