import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
 
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
      {/* Movie Lists for Desktop (hidden on small screens) */}
      <div className="hidden sm:block">
        <div className="-mt-60 pl-6 relative z-20">
          <div className="pl-12">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Romantic movies"} movies={movies.nowPlayingMovies} />
          </div>
        </div>
      </div>

      {/* Movie Lists for Mobile (visible only on small screens) */}
      <div className="sm:hidden">
        <div className="relative z-20">
          <div className="px-4 ">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
            <MovieList title={"Popular"} movies={movies.popularMovies} />
            <MovieList title={"Romantic movies"} movies={movies.nowPlayingMovies} />
          </div>
        </div>
      </div>
    </div>
    )
  );
};

export default SecondaryContainer;
