// import React from "react";

// import { useSelector } from "react-redux";
// import useMovieTrailer from "../hooks/useMovieTrailer";

// const VideoBackground = ({ movieId }) => {
//   //movie id
//   //fetch trailer

//   const trailerVideo = useSelector((store) => store.movies.trailerVideo);
//   useMovieTrailer({ movieId });
//   return (
//     <div className="w-screen">
//       <iframe
//         className="w-screen aspect-video"
//         src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`} // Add "?autoplay=1" to enable autoplay
        
//         title="YouTube video player"

//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       ></iframe>
//     </div>
//   );
// };

// export default VideoBackground;

// import React from "react";

// const VideoTitle = ({ title, overview }) => {
//   return (
//     <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black">
//       <h2 className="text-3xl font-bold text-white">{title}</h2>
//       <p className="py-6 w-1/4 text-white">{overview}</p>
//       <div className="">
//         <button className="bg-white text-black p-4  px-12 text-xl  rounded-lg hover:bg-opacity-50">▶️ Play</button>
//         <button className="bg-opacity-30 bg-slate-300 text-white p-4  px-12 text-xl  rounded-lg m-2 hover:bg-opacity-50">More info</button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;

import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
 
  return (
    movies?.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-60 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList
            title={"Popular"}
            movies={movies.popularMovies}
          />
          <MovieList
            title={"Romantic movies"}
            movies={movies.nowPlayingMovies}
          />
        </div>
        {/*
        Movie List - POpular
          -Movie Cards * n 
        Moview list - now playing
        Moview list - Trending
        */}
      </div>
    )
  );
};

export default SecondaryContainer;

// import React from 'react'
// import { IMG_CDN_URL } from '../utils/constants'
 
// const MovieCard = ({posterPath,onClick}) => {
//   return (
//     <div className='w-48 pr-4' onClick={onClick}> 
//       <img src={IMG_CDN_URL + posterPath} alt='poster ' />
//     </div>
//   )
// }

// export default MovieCard


// import React from "react";
// import MovieCard from "./MovieCard";
// import { useNavigate } from "react-router-dom";


// const MovieList = ({title,movies}) => {
//   const navigate= useNavigate();

//   const handleMovieClick =(movieId)=>{
//     console.log(movieId);
//     navigate(`/video/${movieId}`);
//   }
//   return (
//     <div className="px-6 ">
//       <h1 className=" text-3xl py-4 text-white ">{title}</h1>
//       <div className="flex overflow-x-scroll  ">
      
//         <div className="flex">
//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} onClick={()=>handleMovieClick(movie.id)}/>
//           ))}
//         </div>
      
//       </div>
//     </div>
//   );
// };

// export default MovieList;

