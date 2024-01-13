import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const DayForecast = ({ data, isCelcius }) => {

  const formatDate = (dateString) => {
    const formattedDate = new Date(dateString).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="h-1/3 w-full text-slate-400 px-5 pt-5 flex flex-col">
        <div className="w-full flex items-center">
          <CalendarTodayOutlinedIcon />
          <span className="ml-3 text-slate-400 uppercase">3-Day Forecast</span>
        </div>
        <div className="w-full mt-2 border-b-2 border-slate-400"></div>
      </div>
      <div className="h-2/3 w-11/12 ml-5 flex flex-row wrapper">
        {data.map((dayData) => (
          <div
            className="text-white flex flex-col justify-items-center wrapperItems"
            key={dayData.date}
          >
            <span className="m-auto text-sm">{formatDate(dayData.date)}</span>
            <span className="m-auto text-2xl">
              {dayData.day[isCelcius ? "avgtemp_c" : "avgtemp_f"]}°
            </span>
            <div className="weatherIcon">
              <img src={dayData.day.condition.icon} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayForecast;
