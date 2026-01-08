import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store?.movies?.movieTrailer);

  // ✅ hook is safe because it ignores undefined
  useTrailerVideo(movieID);

  // 🔴 Prevent iframe render before trailer exists
  if (!trailerVideo) return null;

  return (
    <div className=" w-screen aspect-video absolute ">
      <iframe
        className="w-screen  aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        allow=""
      ></iframe>
    </div>
  );
};

export default VideoBackground;
