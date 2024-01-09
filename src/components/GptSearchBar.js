import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const selected_lang = useSelector(store=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/2  bg-black grid grid-cols-12"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[selected_lang].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-600 rounded-md text-white col-span-3">
          {lang[selected_lang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
