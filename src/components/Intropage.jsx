import React, { useState, useEffect } from "react";
import { NEW_PRODUCTS_INTRO, WELCOME_MESSAGE } from "../constants";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const Intropage = () => {
  const { width, height } = useWindowDimensions();

  // Determine if the viewport dimensions match the hide criteria
  const shouldHideSection = width <= 904 && height <= 400;

  return (
    <div className="h-screen flex flex-col bg-cover">
      <div className="flex-grow flex justify-center items-center mt-20">
        <div className="flex flex-col text-center items-center py-10 px-6 md:px-20 w-11/12 md:w-1/2 bg-black rounded-3xl bg-opacity-75 text-white">
          <h1 className="text-4xl md:text-4xl font-bold">Stevo Tech</h1>
          <p className={`my-4 max-w-xl py-4 font-light tracking-tighter text-base md:text-lg ${shouldHideSection ? 'hidden' : 'block'}`}>
            {WELCOME_MESSAGE}
          </p>
          <br />
          <button className="px-6 py-2 bg-gray-500 text-white rounded-full">
            Get NOW
          </button>
        </div>
      </div>

      <div className={`flex text-center justify-center items-center mt-10 ${shouldHideSection ? 'hidden' : 'block'}`}>
        <div className="flex flex-col items-center py-4 px-6 w-11/12 md:w-1/2 bg-black rounded-tl-3xl rounded-tr-3xl bg-opacity-75 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">New Products</h1>
          <p className="my-4 max-w-xl py-4 font-light tracking-tighter text-base md:text-lg">
            {NEW_PRODUCTS_INTRO}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intropage;
