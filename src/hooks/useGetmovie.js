import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_OPTION } from "../Utils/constants";
import { addMovies } from "../Utils/moviesSlice";

const useGetMovie = () => {
    const dispatch = useDispatch();
    const getMovieList = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", MOVIE_OPTION);
      const json= await data.json();
      console.log(json.results);
      dispatch(addMovies(json.results));
      
    }
    useEffect( () => {
      
      getMovieList();
    },[]);

}
export default useGetMovie;