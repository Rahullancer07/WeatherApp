import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import React from "react";
import DayForecast from "../Components/DayForecast";
import HourForeCast from "../Components/HourForecast";

const WeatherPage = ({ data, isCelcius }) => {
  return (
    <div className="w-full h-screen flex">
      <div className="rounded-2xl bg-black/75 flex flex-row px-14 items-center gap-10 justify-between m-auto lg:w-9/12 lg:h-5/6">
        <div className="rounded-2xl flex lg:w-2/5 lg:h-5/6">
          <div className="rounded-2xl flex flex-col gap-5 w-full h-full ">
            <div className="rounded-2xl bg-background sm: lg:w-full h-full">
              <div className="rounded-2xl flex flex-col gap-5 p-5 bg-black/60 sm: lg:w-full h-full">
                <div className="m-auto flex flex-col p-10 h-2/4">
                <span className="text-white text-xl m-auto">
                    {data.location.name}
                  </span>
                  <span className="text-white text-6xl m-auto">
                    {data.current[isCelcius ? "temp_c" : "temp_f"]}°
                  </span>
                  <span className="text-white text-3xl m-auto">
                    {data.current.condition.text}
                  </span>
                  <span className="text-white text-xl m-auto">
                    H:
                    {
                      data.forecast.forecastday[0].day[
                        isCelcius ? "maxtemp_c" : "maxtemp_f"
                      ]
                    }
                    ° L:
                    {
                      data.forecast.forecastday[0].day[
                        isCelcius ? "mintemp_c" : "mintemp_f"
                      ]
                    }
                    °
                  </span>
                </div>
                <div className="rounded-2xl flex flex-row gap-5 sm: lg:w-full h-1/4">
                  <div className="rounded-2xl flex flex-col justify-start pl-2 pt-2 bg-black/60 sm: lg:w-2/4 h-full">
                    <span className="text-slate-400 uppercase">
                      <ThermostatIcon className="h-5 w-5 mr-2" />
                      Feels like
                    </span>
                    <span className="text-white text-5xl mt-2 pl-2 pt-3">
                      {data.current[isCelcius ? "feelslike_c" : "feelslike_f"]}°{" "}
                    </span>
                  </div>
                  <div className="rounded-2xl flex flex-col justify-start pl-2 pt-2 bg-black/60 sm: lg:w-2/4 h-full">
                    <span className="text-slate-400 uppercase">
                      <WaterDropIcon className="h-5 w-5 mr-2" />
                      Precipitation
                    </span>
                    <span className="text-white text-5xl mt-2 pl-2 pt-3">
                      {data.current.precip_in}"
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl flex flex-row justify-center align-center gap-5 sm: lg:w-full h-1/4">
                  <div className="rounded-2xl flex flex-col justify-start pl-2 pt-2 bg-black/60 sm: lg:w-2/4 h-full">
                    <span className="text-slate-400 uppercase">
                      <VisibilityIcon className="h-5 w-5 mr-2" />
                      Visibilty
                    </span>
                    <span className="text-white text-5xl mt-2 pl-2 pt-3">
                      {data.current.vis_km} mi
                    </span>
                  </div>
                  <div className="rounded-2xl flex flex-col justify-start pl-2 pt-2 bg-black/60 sm: lg:w-2/4 h-full">
                    <span className="text-slate-400 uppercase">
                      <WaterDropOutlinedIcon className="h-5 w-5 mr-2" />
                      Humidity
                    </span>
                    <span className="text-white text-5xl mt-2 pl-2 pt-3">
                      {data.current.humidity}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl flex flex-col gap-10 sm: lg:w-3/5 h-5/6 ">
          <div className="rounded-2xl bg-black/50 sm: lg:w-full h-56">
            <HourForeCast
              data={data.forecast.forecastday[0]}
              isCelcius={isCelcius}
            />
          </div>
          <div className="rounded-2xl bg-black/50 sm: lg:w-full h-52">
            <DayForecast
              data={data.forecast.forecastday}
              isCelcius={isCelcius}
            />
          </div>
          <div className="flex flex-row sm: lg:w-full h-48 gap-10">
            <div className="w-1/2 bg-black/50 rounded-2xl flex flex-row">
              <div className="rounded-2xl flex flex-col pl-5 pt-3 sm: lg:w-2/3 h-full">
                <span className="text-slate-400 uppercase">
                  <AirOutlinedIcon className="h-5 w-5 mr-2" />
                  Wind
                </span>
                <div className="flex flex-row mt-2">
                  <span className="text-4xl text-white">
                    {data.current.wind_mph}
                  </span>
                  <div className="flex flex-col text-white gap-1 ml-5">
                    <span className="text-slate-400">MPH</span>
                    <span>Wind</span>
                  </div>
                </div>
                <div className="w-4/5 border-b-2 mt-2"></div>
                <div className="flex flex-row mt-2">
                  <span className="text-4xl text-white">
                    {data.current.gust_mph}
                  </span>
                  <div className="flex flex-col text-white gap-1 ml-5">
                    <span className="text-slate-400">MPH</span>
                    <span>Gusts</span>
                  </div>
                </div>
              </div>
              <div className="text-white text-4xl flex flex-col items-center h-full">
                <span className="my-auto">{data.current.wind_dir}</span>
                <span className="my-auto">{data.current.wind_degree}°</span>
              </div>
            </div>
            <div className="w-1/2 bg-black/50 rounded-2xl ">
              <div className="rounded-2xl flex flex-col pl-5 pr-10 pt-3 sm: lg:w-full h-full">
                <span className="text-slate-400 uppercase">
                  <AirOutlinedIcon className="h-5 w-5 mr-2" />
                  Uv index
                </span>
                <span className="text-4xl text-white pt-5">
                  {data.current.uv}
                </span>
                <div className="pt-5 slideContainer">
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={data.current.uv}
                    class="slider"
                    id="myRange"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
