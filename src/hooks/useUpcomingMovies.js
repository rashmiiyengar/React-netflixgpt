import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies =()=>{


    const dispatch=useDispatch();

    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);

    const getUpcomingMovies =async()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming?&page=1&language=hi-IN",
            API_OPTIONS
          );
        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if(!upcomingMovies)
        getUpcomingMovies();
     }, []);
}

export default useUpcomingMovies;