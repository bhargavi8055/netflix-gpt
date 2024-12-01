import MovieCard from "./MovieCard";

const MovieList = ({moviesList,title})=>{
    // console.log(moviesList)
    return (
        <div className="px-6 ">
            <h1 className="py-6 text-lg md:text-2xl text-white ">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {
                        moviesList?.map(movie=>(

                            <MovieCard poster_path={movie.poster_path} key={movie.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default MovieList;