import React, { useState, useEffect } from "react";
import { useIntl } from 'react-intl';


export const WeatherWidget = ({ name }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { formatMessage: f } = useIntl();

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
    return <div className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">{f({ id: 'load' })}...</div>;
  }

  const weather = weatherData.weather[0];
  const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

  const convertFtoC = temp => Math.round((temp - 32)*5/9)

  return (
    <div className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl" >
      <p className="text-white font-medium text-center text-lg font-bold uppercase">
        {weather.main} in {weatherData.name}
      </p>
        <img src={iconUrl} alt={weatherData.description} className="weather-icon"/>
      <div className="weather-info"
      // className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
      >
        <p className="text-white font-medium text-lg font-bold">{convertFtoC(weatherData.main.temp)}°</p>
        <p className="block text-sm text-white">{f({ id: 'high' })}: {convertFtoC(weatherData.main.temp_max)}°</p>
        <p className="block text-sm text-white">{f({ id: 'low' })}: {convertFtoC(weatherData.main.temp_min)}°</p>
      </div>
    </div>
  );
};
