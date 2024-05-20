import { useSelector } from "react-redux"
import VideoBgTitle from "./VideoBgTitle";
import VideoRunningBg from "./VideoRunningBg";

const BackgroundMovie = () => {
    const movie = useSelector(store => store.movie?.nowPlayingMovies);
    if(movie === null) return

    const bgRunningMovie = movie[0];
    console.log(bgRunningMovie);
    const {original_title,overview,id}=bgRunningMovie;

    return(
        <div>
            <VideoRunningBg id={id}/>
            <VideoBgTitle title={original_title} overview={overview}/>
        </div>
    )
}

export default BackgroundMovie;