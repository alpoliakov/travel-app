import React, { useState, useEffect } from "react";

export const WeatherWidget = ({ name }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const URL =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      name +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setWeatherData(json));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weather = weatherData.weather[0];
  const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

  const convertFtoC = temp => Math.round((temp - 32)*5/9)

  return (
    <div className="w-full max-w-lg">
      <div className="leading-loose">
      <p className="text-white font-medium text-center text-lg font-bold uppercase">
        {weather.main} in {weatherData.name}
        <img src={iconUrl} alt={weatherData.description} />
      </p>
      <div className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
        <dt className="block text-sm text-white">Current</dt>
        <dd className="mt-1 text-sm text-white-800 sm:mt-0 sm:col-span-2">
          {convertFtoC(weatherData.main.temp)}°
        </dd>
        <dt className="block text-sm text-white">High</dt>
        <dd className="mt-1 text-sm text-white-800 sm:mt-0 sm:col-span-2">
          {convertFtoC(weatherData.main.temp_max)}°
        </dd>
        <dt className="block text-sm text-white">Low</dt>
        <dd className="mt-1 text-sm text-white-800 sm:mt-0 sm:col-span-2">
          {convertFtoC(weatherData.main.temp_min)}°
        </dd>

</div>      </div>
    </div>
  );
};
