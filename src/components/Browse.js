
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = ()=>{
    
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const showGPTSearch = useSelector(store=>store.gpt.showGptSearch)
    return (
        <div>
            <Header />
            {
                showGPTSearch? 
                <GPTSearchPage />:
                (<>
                    <MainContainer></MainContainer>
                    <SecondaryContainer />
                </>)
            }
        </div>
    )
}

export default Browse;