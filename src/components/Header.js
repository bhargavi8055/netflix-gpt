import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser ,removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector(store=>store.user);

    useEffect(()=>{

        const unsubscribe= onAuthStateChanged(auth,(user)=>{
            if (user) {
                // User is signed in
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse")
              } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
              }
        })
        //unsubscribe when component unmounts
        return ()=>unsubscribe();
    },[])

    const handleSignout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
          
    }
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <img className="w-44"
            src={LOGO} 
            alt="logo"/>
            {
                user && 
                <div className="flex p-4 justify-around cursor-pointer" onClick={handleSignout}>
                    <img className="w-12 h-12 p-2" src={user.photoURL} alt="usericon"/>
                    <button className="font-bold text-white p-2" >(Sign Out)</button>
                </div>
            }
        </div>
    )
}
export default Header;