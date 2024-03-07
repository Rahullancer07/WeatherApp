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
    <div className="rounded-xl md:bg-black/25 flex flex-col lg:flex-row px-5 sm:px-10 py-10 gap-10 mx-auto justify-center md:w-11/12 h-fit">
      <div className="rounded-lg flex flex-col gap-5 p-5 bg-black/25 h-fit w-full">
        {/* location, temp ,condition ,and high & low */}
        <div className="flex flex-col gap-2 mb-10">
          <span className="text-white text-lg flex justify-center">
            {data.location.name}
          </span>
          <span className="text-white text-8xl flex justify-center pl-10">
            {data.current[isCelcius ? "temp_c" : "temp_f"]}°
          </span>
          <span className="text-white text-2xl flex justify-center">
            {data.current.condition.text}
          </span>
          <span className="text-white text-xl flex justify-center">
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
        {/* feels like , precipitation , Visibility and humidity */}
        <div className="rounded-xl grid grid-cols-2 gap-5 w-full">
          <div className="rounded-xl flex flex-col justify-start px-2 py-2 bg-black/30">
            <span className="text-white/65 uppercase text-sm flex items-center">
              <ThermostatIcon />
              Feels like
            </span>
            <span className="text-white text-5xl px-2 py-3">
              {data.current[isCelcius ? "feelslike_c" : "feelslike_f"]}°{" "}
            </span>
          </div>
          <div className="rounded-xl flex flex-col justify-start px-2 py-2 bg-black/30">
            <span className="text-white/65 uppercase text-xs md:text-sm flex items-center">
              <WaterDropIcon />
              Precipitation
            </span>
            <span className="text-white text-5xl px-2 py-3">
              {data.current.precip_in}"
            </span>
          </div>
        </div>
        <div className="rounded-xl grid grid-cols-2 gap-5 w-full">
          <div className="rounded-xl flex flex-col justify-start px-2 py-2 bg-black/30">
            <span className="text-white/65 uppercase text-sm flex items-center">
              <VisibilityIcon />
              Visibilty
            </span>
            <span className="text-white text-5xl px-2 py-3">
              {data.current.vis_km} mi
            </span>
          </div>
          <div className="rounded-xl flex flex-col justify-start px-2 py-2 bg-black/30">
            <span className="text-white/65 uppercase text-sm flex items-center">
              <WaterDropOutlinedIcon />
              Humidity
            </span>
            <span className="text-white text-5xl px-2 py-3">
              {data.current.humidity}%
            </span>
          </div>
        </div>
      </div>
      <div className="rounded-xl flex flex-col gap-10 lg:w-3/5">
        <div className="rounded-xl bg-black/30 lg:w-full h-56">
          <HourForeCast
            data={data.forecast.forecastday[0]}
            isCelcius={isCelcius}
          />
        </div>
        <div className="rounded-xl bg-black/30 lg:w-full h-52">
          <DayForecast data={data.forecast.forecastday} isCelcius={isCelcius} />
        </div>
        <div className="flex flex-col sm:flex-row lg:w-full h-full gap-10">
          <div className="w-full sm:w-1/2 bg-black/30 rounded-xl">
            <div className="rounded-xl flex flex-col p-5 w-full h-full">
              <span className="text-white/65 uppercase">
                <AirOutlinedIcon className="h-5 w-5 mr-2" />
                Wind
              </span>
              <div className="grid grid-cols-2">
                <div className="col-span-1 grid grid-cols-2">
                  <span className="text-4xl text-white text-center flex items-center col-span-1">
                    {data.current.wind_mph}
                  </span>
                  <div className="flex flex-col text-white gap-1">
                    <span className="text-white/65">MPH</span>
                    <span>Wind</span>
                  </div>
                </div>
                <div className="text-white text-4xl flex flex-col items-center h-full">
                  <span className="my-auto">{data.current.wind_dir}</span>
                </div>
                <div className="border-b-2 mt-4"></div>
              </div>
              <div className="grid grid-cols-2 mt-4">
                <div className="col-span-1 grid grid-cols-2">
                  <span className="text-4xl text-white text-center flex items-center">
                    {data.current.gust_mph}
                  </span>
                  <div className="flex flex-col text-white gap-1">
                    <span className="text-white/65">MPH</span>
                    <span>Gusts</span>
                  </div>
                </div>
                <div className="text-white text-4xl flex flex-col items-center h-full">
                  <span className="my-auto">{data.current.wind_degree}°</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 bg-black/30 rounded-xl">
            <div className="rounded-xl flex flex-col p-5 h-full/">
              <span className="text-white/65 uppercase">
                <AirOutlinedIcon className="h-5 w-5 mr-2" />
                Uv index
              </span>
              <span className="text-6xl text-white px-5 pt-5">{data.current.uv}</span>
              <div className="p-5 slideContainer">
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
  );
};

export default WeatherPage;
