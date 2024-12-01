import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({poster_path,movie,onCardClick})=>{

    if(!poster_path) return null;

   
    return (
        <div className="w-24 md:w-48 pr-4 hover:rounded-lg cursor-pointer" onClick={()=>onCardClick(movie)}>
            <img className="hover:rounded-lg"
            src={IMG_CDN_URL+poster_path}
            alt="Movie Card"
            />
        </div>
    )
}
export default MovieCard;