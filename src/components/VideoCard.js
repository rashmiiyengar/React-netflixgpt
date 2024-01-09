import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useNavigate, useParams } from "react-router-dom";

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
    <div className=" w-screen bg-black">
      <div className="bg-black flex justify-end p-4 ">
        <button className="text-white bg-red-600 p-2 w-24 rounded-md opacity-80" onClick={handleHomeClick}>
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
