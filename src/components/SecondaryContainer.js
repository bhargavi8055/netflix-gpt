import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryContainer = ()=>{

    const moviesList = useSelector(store=>store.movies)
    return (
        moviesList?.nowPlayingMovies &&(
        <div className=" bg-black">
            <div className="-mt-56 relative z-20">

            <MovieList  moviesList={moviesList?.nowPlayingMovies} title="Now Playing"/>
            <MovieList  moviesList={moviesList?.popularMovies} title="Popular"/>
            <MovieList  moviesList={moviesList?.topRatedMovies} title="Top Rated"/>
            <MovieList  moviesList={moviesList?.upcomingMovies} title="Upcoming"/>
            </div>
        </div>
        )
        

    )
}
export default SecondaryContainer;