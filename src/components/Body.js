import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import VideoCard from "./VideoCard";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const Body = () => {
 

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/video/:movieId",
      element: <VideoCard />
    }
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
