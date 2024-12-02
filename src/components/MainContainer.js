import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{

    const movies= useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const MainMovie = movies[0];
    const {original_title,overview,id} = MainMovie;
    return (
        <div className="pt-[45%] md:pt-0 bg-black">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}
export default MainContainer;