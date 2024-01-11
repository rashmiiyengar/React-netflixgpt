// import { useDispatch } from "react-redux";
// import { API_OPTIONS } from "../utils/constants";
// import { addTrailerVideo } from "../utils/movieSlice";
// import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

// const useMovieTrailer = ({ movieId }) => {
//   const dispatch = useDispatch();

//   const getMovieVideos = async () => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/videos`,
//       API_OPTIONS
//     );

//     if (!data.ok) {
//       if (data.status === 404) {
//         // Movie not found
//         console.error(`Movie with ID ${movieId} not found.`);
//       } else {
//         throw new Error(`Failed to fetch movie videos. Status: ${data.status}`);
//       }
//     }

//     const json = await data.json();
   

//     const filterData = json.results.filter((video) => video.type === "Trailer");
//     const trailer = filterData.length ? filterData[0] : json.results[0];

//     dispatch(addTrailerVideo(trailer));
//   };

//   useEffect(() => {
//     getMovieVideos();
//   }, []);
// };

// export default useMovieTrailer;


const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );

      if (!data.ok) {
        if (data.status === 404) {
          // Movie not found
          console.error(`Movie with ID ${movieId} not found.`);
        } else {
          throw new Error(`Failed to fetch movie videos. Status: ${data.status}`);
        }
      }

      const json = await data.json();

      if (json.results && Array.isArray(json.results)) {
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
      } else {
        console.error('Invalid response format: missing or not an array', json);
      }
    } catch (error) {
      console.error('Error fetching movie videos:', error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (movieId) {
      getMovieVideos();

   
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTrailer;
