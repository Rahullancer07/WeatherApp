import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherPage from "../Pages/WeatherPage";
import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import Input from "../Components/Input";
import { weatherBackgroundData } from "../colorGenerator.js";

const LandingPage = ({ city, setCity }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading ,setLoading] = useState(false);
  const [isCelcius, setIsCelcius] = useState(true);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
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
        setWeatherCondition(response.data.current.condition.text);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setError(error);
        setData(null);
        setCity("");
        setLoading(false)
        console.error(error);
      }
    };
    fetchData();
  }, [city]);

  useEffect(() => {
    // Check if weather condition and time of day are set
    if (weatherCondition && weatherBackgroundData) {
      const hour = new Date(data?.location.localTime).getHours();
      const timeOfDay =
        hour >= 6 &&
        hour < 18
          ? "day"
          : "night";
      const backgroundColorFromData = weatherBackgroundData[timeOfDay][weatherCondition.trim()];
      console.log(backgroundColorFromData);
      console.log(weatherBackgroundData)
      // Set background color based on weather condition and time of day
      setBackgroundColor(backgroundColorFromData);
    }
  }, [weatherCondition, weatherBackgroundData]);

  return (
    <div
      className="min-h-screen h-fit w-full py-10"
      style={{ background: backgroundColor }}
    >
      <div className="flex flex-row gap-5 items-center justify-center md:mb-10 px-5 sm:px-0">
        <div className="flex items-center justify-center">
          <Input city={city} setCity={setCity}/>
        </div>
        <div className="w-20 h-9 rounded-2xl flex flex-row justify-between">
          <div
            className={`rounded-l-2xl h-full w-full flex justify-center items-center curson-pointer ${
              isCelcius ? "bg-slate-200 text-black" : "bg-black/30 text-white/65"
            }`}
            onClick={() => setIsCelcius(true)}
          >
            <span className="cursor-pointer">°C</span>
          </div>
          <div
            className={`rounded-r-2xl h-full w-full flex justify-center items-center curson-pointer ${
              !isCelcius ? "bg-slate-200 text-black" : "bg-black/30 text-white/65"
            }`}
            onClick={() => setIsCelcius(false)}
          >
            <span className="cursor-pointer">°F</span>
          </div>
        </div>
      </div>
      {loading && <LoadingPage />}
      {!data && error && !loading && <ErrorPage />}
      {data && <WeatherPage data={data} isCelcius={isCelcius} />}
    </div>
  );
};

export default LandingPage;
