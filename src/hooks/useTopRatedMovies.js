import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovies =()=>{


    const dispatch=useDispatch();
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies);

    const getTopRatedMovies =async()=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated?&page=1&language=hi-IN",
            API_OPTIONS
          );
        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if(!topRatedMovies)
        getTopRatedMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
}

export default useTopRatedMovies;