import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useNavigate, useParams } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";

const VideoCard = () => {

  const { movieId } = useParams();
  const navigate = useNavigate();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer({ movieId });

  console.log("vedio card" + movieId);

  const handleHomeClick =()=>{
    navigate("/browse")
  }
  return (
    <div className=" w-screen bg-black ">
      <div className="bg-black flex justify-between p-4 h-20 opacity-90 mr-2">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
        <button className="text-white bg-red-600 p-2 w-24 rounded-md" onClick={handleHomeClick}>
          Home
        </button>
      </div>
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`} // Add "?autoplay=1" to enable autoplay
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoCard;
