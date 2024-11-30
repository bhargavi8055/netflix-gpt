import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (id)=>{

    const dispatch = useDispatch();
    const url = 'https://api.themoviedb.org/3/movie/'+id+'/videos';


    const getMovieVideos = async()=>{
        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        const trailersList = json.results.filter(video=>video.type=="Trailer");
        const trailer = trailersList.length? trailersList[0]: json.results[0];
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=>{
        getMovieVideos();
    },[])
}
export default useMovieTrailer;