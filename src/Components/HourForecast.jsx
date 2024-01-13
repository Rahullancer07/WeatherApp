import React from "react";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const HourForecast = ({ data, isCelcius }) => {
  const d = new Date();
  let currentHour = d.getHours();
  const getHour = (timeString) => {
    const dateObject = new Date(timeString);
    const hour = dateObject.getHours();
    return hour;
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="h-1/3 w-full text-slate-400 px-5 pt-5 flex flex-col">
        <div className="w-full flex items-center">
          <QueryBuilderOutlinedIcon />
          <span className="ml-3 text-slate-400 uppercase">Hourly Forecast</span>
        </div>
        <div className="w-full mt-2 border-b-2 border-slate-400"></div>
      </div>
      <div className="h-2/3 w-inherit mx-5 flex flex-row wrapper">
        {data.hour
          .filter((hourData) => getHour(hourData.time) >= currentHour)
          .map((hourData) => (
            <div
              className="text-white flex flex-col justify-items-center gap-2 wrapperItems"
              key={hourData.time}
            >
              <span className="m-auto text-sm">
                {getHour(hourData.time) === currentHour
                  ? "Now"
                  : `${getHour(hourData.time)}`}
              </span>
              <span className="m-auto text-2xl">
                {hourData[isCelcius ? "temp_c" : "temp_f"]}°
              </span>
              <div className="weatherIcon">
                <img src={hourData.condition.icon} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HourForecast;
