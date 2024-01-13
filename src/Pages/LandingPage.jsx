import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherPage from "../Pages/WeatherPage";
import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import Input from "../Components/Input";

const LandingPage = ({city, setCity}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isCelcius, setIsCelcius] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: {
          q: `${city}`,
          days: "3",
        },
        headers: {
          "X-RapidAPI-Key":
            "27524a7bc3msh6af5f24737a4006p179a25jsn874e5812c4df",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
        setData(null)
        setCity("");
        console.error(error);
      }
    };
    fetchData();
  }, [city]);

  return (
    <div className="bg-background h-screen bg-cover flex flex-col justify-center sm:h-screen sm:w-full sm:bg-cover">
      <div className="flex flex-row gap-5 w-2/4 justify-between m-auto pt-10">
        <div className="w-full">
          <Input city={city} setCity={setCity} />
        </div>
        <div className="w-2/12 rounded-2xl flex flex-row justify-between">
          <div
            className={`rounded-l-2xl h-full w-full flex justify-center items-center curson-pointer ${
              isCelcius ? "bg-black text-white" : "bg-slate-400"
            }`}
            onClick={() => setIsCelcius(true)}
          >
            <span className="cursor-pointer">°C</span>
          </div>
          <div
            className={`rounded-r-2xl h-full w-full flex justify-center items-center curson-pointer ${
              !isCelcius ? "bg-black text-white" : "bg-slate-400"
            }`}
            onClick={() => setIsCelcius(false)}
          >
            <span className="cursor-pointer">°F</span>
          </div>
        </div>
      </div>
      {data === null && error===null && <LoadingPage/>}
      {!data && error && <ErrorPage/>}
      {data && <WeatherPage data={data} isCelcius={isCelcius}/>}
    </div>
  );
};

export default LandingPage;
