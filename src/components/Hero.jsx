import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../Request";

export default function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
          <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          />
          <div className="absolute w-full top-[30%] p-4 md:p-8">
            <div className="container mx-auto "> 
               <h1 className="text-3xl py-3 md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-3">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 py-3 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full leading-8 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 200)}
          </p>
            </div>
         
        </div>
      </div>
    </div>
  );
}
