import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieInfo = ({movie,onClose})=>{
    useMovieTrailer(movie.id)
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
    return (
        <div className="z-30 absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className=" text-black p-2 rounded-lg max-w-4xl w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="z-20 absolute top-0 right-2 text-white font-bold  hover:text-red-500"
        >
          ✕
        </button>


        {/* Embedded Video */}
        <div className="mt-0 z-10">
        <      iframe className="relative w-full aspect-video"
                
                            src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
       

        
       
        <div className="mt-4 border-black bg-black rounded-lg text-white">
             {/* Movie Title */} {/* Movie Description */}
            <h1 className="text-2xl font-bold mt-4 text-white p-4 ">{movie.title}</h1>
            <p className="p-4">{movie.overview}</p>
        </div>
      </div>
    </div>
    //     <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
    //     <div className="bg-white text-black p-8 rounded-lg max-w-md w-full relative">
    //       <button
    //         onClick={onClose}
    //         className="absolute top-2 right-2 text-black font-bold"
    //       >
    //         ✕
    //       </button>
    //       <iframe className="w-screen aspect-video"
                
    //             src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"} 
    //             title="YouTube video player" 
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    //             referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    //       <h1 className="text-2xl font-bold">{movie.title}</h1>
    //       <p className="mt-4">{movie.description}</p>
    //     </div>
    //   </div>
        
    )
}

export default MovieInfo;