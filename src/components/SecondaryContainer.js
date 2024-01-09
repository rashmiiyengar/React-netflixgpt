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
