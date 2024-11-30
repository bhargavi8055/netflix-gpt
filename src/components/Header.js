import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser ,removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const gptShowValue = useSelector(store=>store.gpt.showGptSearch);

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
          }).catch((error) => {
            navigate("/error");
          });
          
    }

    const handleGPTSearch = ()=>{
        //ToggleGPTSearchView
        dispatch(toggleGptSearchView())
    }
    const handleChangeLanguage = (e)=>{
        dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <img className="w-44"
            src={LOGO} 
            alt="logo"/>
            {
                user && 
                <div className="flex p-4 justify-around ">
                    {
                        gptShowValue &&
                        <select className="px-2 bg-gray-900 text-white m-2 py-0 rounded-md" onChange={handleChangeLanguage}>
                        {SUPPORTED_LANGUAGES.map(lang=>(
                            <option value={lang.identifier} key={lang.identifier} >{lang.name}</option>
                        ))}
                    </select>}
                    <button className="bg-purple-800 text-white py-2 px-4 m-2 rounded-lg cursor-pointer"
                    onClick={handleGPTSearch}
                    >{ gptShowValue ? "Home Page" :"GPT Search"}</button>
                    <img className="w-14 h-14 p-2 rounded-3xl" src={user.photoURL} alt="usericon"/>
                    <button className="font-bold text-white p-2 cursor-pointer" onClick={handleSignout}>(Sign Out)</button>
                </div>
            }
        </div>
    )
}
export default Header;