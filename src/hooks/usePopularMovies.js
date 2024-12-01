import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = ()=>{

    const popularMovies = useSelector(store=>store.movies.popularMovies);
    const url = "https://api.themoviedb.org/3/movie/popular?page=1";
    const dispatch = useDispatch();

    const getPopularMovies = async ()=>{

        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        if(!popularMovies)
        getPopularMovies();
    },[])
}

export default usePopularMovies;