import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-4 md:px-24 absolute bg-gradient-to-r from-black">
    <h2 className="text-3xl font-bold text-white">{title}</h2>
    <p className="py-6 md:w-1/4 text-white">{overview}</p>
    <div className="">
      <button className="bg-white text-black p-4 px-6 md:px-12 text-xl rounded-lg mb-2 md:mb-0 mr-2 md:mr-0 hover:bg-opacity-50">▶️ Play</button>
      <button className="bg-opacity-30 bg-slate-300 text-white p-4 px-6 md:px-12 text-xl rounded-lg hover:bg-opacity-50">More info</button>
    </div>
  </div>
  );
};

export default VideoTitle;
