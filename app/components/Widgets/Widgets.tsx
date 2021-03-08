import React, { useState} from 'react';
import {WeatherWidget} from './WeatherWidget';
import {CurrencyWidget} from './CurrencyWidget';
import {TimeWidget} from './TimeWidget';

// will be removed, when widget will be added to country-page
const PLACES = [
  { name: "London"},
  { name: "Berlin"},
  { name: "Madrid" },
  { name: "Rome" },
];

export const Widgets = () => {

  return (
    <div className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
      <div className="px-4 py-5 sm:px-6">
        <WeatherWidget name={PLACES[0].name} />
        <CurrencyWidget />
        <TimeWidget /> 
      </div>
    </div>
  );
          }
