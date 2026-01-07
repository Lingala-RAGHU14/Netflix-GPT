
import NowPlayingMovies from "../Hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground"


const Browse = () => {
    
    
NowPlayingMovies()

    return (
      <>
       <Header />
       <VideoBackground  />
       <MainContainer />
       
       <SecondaryContainer />
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