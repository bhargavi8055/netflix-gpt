import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const MovieInfo = ({movie,onClose})=>{

    useGetMovieTrailer(movie.id)
    const trailerVideo = useSelector(store=>store.movies?.MovieTrailerVideo);


    return (
        <div className="z-30 absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
          <div className=" text-black p-2 rounded-lg max-w-4xl w-full relative">
            
            <button
              onClick={onClose}
              className="z-20 absolute top-0 right-2 text-white font-bold  hover:text-red-500 text-xl md:text-3xl"
            >
              ✕
            </button>


            <div className="mt-0 z-10">
            <      iframe className="relative w-full aspect-video"
                    
                                src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"} 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" ></iframe>
            </div>
          

            
          
            <div className="mt-4 border-black bg-black rounded-lg text-white">
                <h1 className="text-2xl font-bold mt-4 text-white p-4 ">{movie.title}</h1>
                <p className="p-4">{movie.overview}</p>
            </div>
          </div>
       </div>
   
        
    )
}

export default MovieInfo;