import {useSelector} from "react-redux"
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector((store)  => store.movies?.nowPlayingMovies) 
    if (!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie)
    const {original_title, overview, movieID} = mainMovie;
    return ( 
        <>
        < VideoBackground movieID={movieID}   />
        <VideoTitle title={original_title} overview = {overview} />
        </>
        
    )
}

export default MainContainer;