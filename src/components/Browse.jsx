
import NowPlayingMovies from "../Hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";


const Browse = () => {
    
    NowPlayingMovies()

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    const movieID = movies ? movies[0]?.id : null;

    return (
      <>
      <div className="h-screen">
       <VideoBackground movieID={movieID} />
       <Header />
       <MainContainer />
       
       <SecondaryContainer />
       </div>
       </>
    /* 
    -MainContainer
        -- movieBackground
        -- movieTile
    - secondaryContainer
        -- moviesList * n
        -- cards * n
             
    
    */
    )
}

export default Browse