import React from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";


const MovieList = ({title,movies}) => {
  const navigate= useNavigate();

  const handleMovieClick =(movieId)=>{
    console.log(movieId);
    navigate(`/video/${movieId}`);
  }
  return (
    <div className="px-6  ">
      <h1 className=" text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
      
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} onClick={()=>handleMovieClick(movie.id)}/>
          ))}
        </div>
      
      </div>
    </div>
  );
};

export default MovieList;
