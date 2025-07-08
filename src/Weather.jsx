import { useState } from "react";
import './weather.css'
const api = {
  key: "fbea727058c10eab91a384120c5c28f9",
  base: "https://api.openweathermap.org/data/2.5/"
};

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      // Check if query is not empty before making API call

      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery(""); // Clear query AFTER successful fetch
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let Year = d.getFullYear();

    return `${day} ${date} ${month} ${Year}`;
  };

  return (
    <div>
      <main>
        <div className="search_bar">
          <input
            className="search_box"
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined")?(
<div className="location_box">
          <div className="location">
          
              <div>
                {weather.name}, {weather.sys.country}
          </div>
            <div className="Date">{dateBuilder(new Date())}</div>
          </div>
          <div className="temprature">
            {Math.round(weather.main.temp)}°c

          </div>
          <div classsName="weather">
{weather.weather[0].main}
          </div>
        </div>
        ):('') }
        
      </main>
    </div>
  );
};

export default Weather;
