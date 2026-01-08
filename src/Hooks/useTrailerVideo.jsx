import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const useTrailerVideo = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieID) return;

    const movieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await response.json();
        console.log("TMDB video response:", json);

        // 🔴 HARD STOP if results not present or not array
        if (!json?.results || !Array.isArray(json.results)) {
          console.warn("No video results for movie:", movieID);
          return;
        }

        const trailers = json.results.filter(
          (video) => video.type === "Trailer"
        );

        const trailer =
          trailers.length > 0 ? trailers[0] : json.results[0];

        if (trailer) {
          dispatch(addMovieTrailer(trailer));
        }
      } catch (error) {
        console.error("Trailer fetch error:", error);
      }
    };

    movieTrailer();
  }, [movieID, dispatch]);
};

export default useTrailerVideo;
