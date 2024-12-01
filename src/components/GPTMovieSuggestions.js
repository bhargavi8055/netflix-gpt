import { useSelector } from "react-redux";
import MovieList from './MovieList'

const GPTMovieSuggestions = ()=>{

    const {movieNames,movieResultsTMDB}=useSelector(store=>store.gpt);

    if(!movieResultsTMDB) return null;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-80">

            <div>
                {
                    movieNames.map((movie,i)=>(

                        <MovieList title={movie} moviesList={movieResultsTMDB[i]} key={movie} />
                    ))
                }
            </div>
            
        </div>
    )
}
export default GPTMovieSuggestions;