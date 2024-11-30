import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = ()=>{
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

    const dispatch = useDispatch();

    const getNowPlayingMovies = async()=>{
        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies;