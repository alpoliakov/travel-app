import React from 'react';

import { CurrencyWidget } from './CurrencyWidget';
import { TimeWidget } from './TimeWidget';
import { WeatherWidget } from './WeatherWidget';

export const Widgets = ({ dataCountry, currency, timeZone }) => {
  return (
    <div className="widget-box">
      <div className="widget-container">
        <WeatherWidget countryCapital={dataCountry.en.capital} />
        <CurrencyWidget currency={currency} />
        <TimeWidget timeZone={timeZone} />
      </div>
    </div>
  );
};
