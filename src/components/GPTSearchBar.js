import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = ()=>{

    const langKey = useSelector(store=>store.config.language)
    return (
        <div className="pt-[8%] flex justify-center ">
            <form className="w-1/2 bg-black grid grid-cols-12">
                <input
                type="text"
                placeholder={lang[langKey].GptSearchBarPlaceholder}
                className="p-2 m-4 col-span-9"
                />
                <button className=" col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg ">{lang[langKey].search}</button>

            </form>
        </div>
    )
}
export default GPTSearchBar;