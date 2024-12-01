
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import {  addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
    const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
    const dispatch = useDispatch();

    const getUpcomingMovies = async ()=>{

        const data = await fetch(url,API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
        if(!upcomingMovies)
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;