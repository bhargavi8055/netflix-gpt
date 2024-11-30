import { BG_URL } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearchPage = ()=>{
    return (
        <div>
            <div className="absolute -z-10">
                <img 
                src={BG_URL}
                alt="background-image"
                />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}
export default GPTSearchPage;