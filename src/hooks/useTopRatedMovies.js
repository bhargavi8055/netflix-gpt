import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = ()=>{
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies);
    const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const dispatch = useDispatch();

    const getTopRatedMovies = async ()=>{

        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
        if(!topRatedMovies)
        getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;