import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo";

const MovieList = ({moviesList,title})=>{
    
    const [selectedMovie,setSelectedMovie] = useState(null);
    return (
        <div className="relative">
            <div className="px-6 ">
                <h1 className="py-6 text-lg md:text-2xl text-white ">{title}</h1>
                <div className="flex overflow-x-scroll">
                    <div className="flex">
                        {
                            moviesList?.map(movie=>(

                                <MovieCard poster_path={movie.poster_path} key={movie.id} movie={movie} onCardClick={setSelectedMovie}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            {
                selectedMovie  && 
                <MovieInfo movie={selectedMovie} onClose={()=>setSelectedMovie(null)} />

            }
        </div>

    )
}
export default MovieList;