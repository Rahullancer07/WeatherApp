import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";

const Input = ({ city, setCity }) => {
  const [inputCity , setInputCity] = useState(city);
  const handleChange = (event) => {
    setInputCity(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setCity(inputCity); // Use inputCity, not event.target.value
  };
  
  return (
    <div>
      <div>
        <div class="relative rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">
              <PlaceIcon className="h-5 w-5 text-white" />
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="city"
              value={inputCity}
              className="block w-full rounded-2xl border-0 py-1.5 pl-12 pr-20 text-white bg-black/75 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Search for a city"
              autoComplete="off"
              onChange={handleChange}
            />
            <input type="submit" hidden/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
