import React from "react";

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  //movie id
  //fetch trailer

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer({ movieId });
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

export default VideoBackground;