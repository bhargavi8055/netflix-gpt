import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResults } from "../utils/gptSlice";
import OpenAI from "openai";

const GPTSearchBar = ()=>{

    let openai;
    const dispatch = useDispatch();

    const langKey = useSelector(store=>store.config.language);

    const searchText = useRef();
    const GPTSearchKey= useRef();

    


    //for each movie fetch movie data from TMDB 
    const searchMovieTMDB =async (movieName)=>{
        const url = "https://api.themoviedb.org/3/search/movie?query=" +
            movieName +
            "&include_adult=false&language=en-US&page=1";
        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    const handleGPTSearchClick = async()=>{
        let gptMovies;
        const defaultMovies = "Jungle Book,Absolution,Gladiator,3AM,pirates of the caribbean".split(",");

        if(GPTSearchKey.current.value.length>0){
            const gptSearchQuery = "Act as a Movie Recommendation system and suggest some for the query: "+
            searchText.current.value +
        ". only give me names of 5 movies, comma separated like the example result given a head. Example Result: Gadar,Sholay,Don,Golmal,Koi Mil Gaya";
         //make an api call to GPT API to get the Movie Results for the given text
            let gptResults;
            try{
                if(openai.chat){
                    const gptResults = await openai.chat.completions.create({
                        messages: [{ role: 'user', content: gptSearchQuery }],
                        model: 'gpt-3.5-turbo',
                    });
                
                    if (gptResults?.choices?.[0]?.message?.content) {
                        gptMovies = gptResults.choices[0].message.content.split(",");
                    } else {
                        gptMovies = defaultMovies;
                    }
                }
                
            }
            catch(error){
                console.error("API call failed:", error);
                gptMovies = defaultMovies;
            }
           
         
        }
        else{
            gptMovies=defaultMovies;
            //['Andaz Apna Apna', 'Hera Pheri', 'Chupke Chupke', 'Jaane Bhi Do Yaaro', 'Padosan']
        } 
        
        
       

        const promiseArray =gptMovies.map((movie)=>searchMovieTMDB(movie))
        //[Promise,Promise,Promise,Promise,Promise]
        const TMDBResults =await Promise.all(promiseArray);

     

        dispatch(addGPTMovieResults({movieNames:gptMovies,movieResultsTMDB:TMDBResults}))


        
    }
    const handleBlur = ()=>{
        openai  = new OpenAI({
            apiKey:GPTSearchKey,
            dangerouslyAllowBrowser:true
        });
       
    }
    

    return (
        <>
            <div className="pt-[8%] flex md:justify-center flex-col md:flex-row ">
                <div className="bg-black text-center ">
                    <input 
                    ref={GPTSearchKey} onBlur={handleBlur}
                    type="text" placeholder={lang[langKey].GPTSearchKey} className=" p-2 m-4 mx-1ml-2  md:m-4 w-[100%]"/>
                </div>
                <form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                    <input
                    ref={searchText}
                    type="text"
                    placeholder={lang[langKey].GptSearchBarPlaceholder}
                    className="p-2 m-4 mx-1ml-2 col-span-9 md:m-4"
                    />
                    <button 
                    onClick={handleGPTSearchClick}
                    className=" col-span-3  py-2 m-4 mx-1 mr-2 md:m-4 px-2 md:px-6 bg-red-700 text-white rounded-lg ">{lang[langKey].search}</button>

                </form>
            </div>
            <div className="text-white text-center m-2 ">
               <div className="bg-black p-2 inline-block">"Please enter a GPT search key. If you don't, the default movie list will be used as the search result."</div>
            </div>
        </>
    )
}
export default GPTSearchBar;