import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearchPage = ()=>{
    return (
        <>
            <div className="fixed -z-10 ">
                <img className="h-screen object-cover 
                 
                  sm:h-[100%] sm:fixed md:h-auto
                  "
                src={BG_URL}
                alt="background-image"
                />
            </div>
            
            <div className="pt-[50%] md:pt-[0%]">
                <GPTSearchBar />
                <GPTMovieSuggestions />
            </div>
        </>
    )
}
export default GPTSearchPage;