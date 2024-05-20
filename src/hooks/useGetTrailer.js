import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_OPTION } from "../Utils/constants";
import { addMovieTrailer } from "../Utils/moviesSlice";


const useGetTrailer = (id) => {
    const dispatch=useDispatch();   
    const movieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', MOVIE_OPTION)
        const json = await data.json();
        console.log(json);

        const trailerList = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerList.length ? trailerList[0] : json.results[0];
        console.log(trailer);
        dispatch(addMovieTrailer(trailer));
    } 
    
    useEffect( () =>{
        movieTrailer();
    },[]);
}

export default useGetTrailer;