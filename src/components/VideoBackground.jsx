import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector(
    (store) => store?.movies?.movieTrailer
  );

  // ✅ hook is safe because it ignores undefined
  useTrailerVideo(movieID);

  // 🔴 Prevent iframe render before trailer exists
  if (!trailerVideo) return null;

  return (
    <div className="absolute">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
