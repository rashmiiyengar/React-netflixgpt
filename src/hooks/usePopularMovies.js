import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies =()=>{

    const dispatch = useDispatch ();
    const popularMovies = useSelector(store=>store.movies.popularMovies);
 
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?&page=1&language=hi-IN",
        API_OPTIONS
      );
  
      const json = await data.json();
  
  
      dispatch(addPopularMovies(json.results));
    };
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
      if(!popularMovies)
       getPopularMovies();
    }, []);
}

export default usePopularMovies;