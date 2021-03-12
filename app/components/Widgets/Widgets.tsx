import React from 'react';

import { CurrencyWidget } from './CurrencyWidget';
import { TimeWidget } from './TimeWidget';
import { WeatherWidget } from './WeatherWidget';

// will be removed, when widget will be added to countries-page
const PLACES = [{ name: 'London' }, { name: 'Berlin' }, { name: 'Madrid' }, { name: 'Rome' }];

export const Widgets = () => {
  return (
    <div className="widget-box">
      <div className="widget-container">
        <WeatherWidget countryCapital={PLACES[0].name} />
        <CurrencyWidget currency={'USD'} />
        <TimeWidget timeZone={'EST'} />
      </div>
    </div>
  );
};
