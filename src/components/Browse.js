import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>






      {/*

      Main container
        -vedio Background
        -vedio title
      secondary container
        -movie list * n
        -cards * n
  */}
    </div>
  );
};

export default Browse;
