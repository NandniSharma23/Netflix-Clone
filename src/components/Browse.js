import Header from "./Header";
import useGetMovie from "../hooks/useGetmovie";
import BackgroundMovie from "./BackGroundMovie";
import ChildMovieList from "./ChildMovieList";
  

const Browse = () => {
  useGetMovie();
 
  return (
    <div>
      <Header/>
      <BackgroundMovie/>
      <ChildMovieList/>
    </div>
  );
};

export default Browse;