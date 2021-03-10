import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

export const CurrencyWidget = ({ currency }) => {
  const { formatMessage: f } = useIntl();
  const [toUSD, setToUSD] = useState(null);
  const [toEUR, setToEUR] = useState(null);
  const [toRUB, setToRUB] = useState(null);

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency}&symbols=USD`)
      .then((res) => res.json())
      .then((json) => {
        setToUSD(json.rates.USD.toFixed(3));
        console.log(toUSD);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency}&symbols=EUR`)
      .then((res) => res.json())
      .then((json) => {
        setToEUR(json.rates.EUR.toFixed(3));
        console.log(toUSD);
      });
  }, []);

  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency}&symbols=RUB`)
      .then((res) => res.json())
      .then((json) => {
        setToRUB(json.rates.RUB.toFixed(3));
        console.log(toUSD);
      });
  }, []);

  return (
    <div className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
      <p className="text-white font-medium text-center text-lg font-bold uppercase">{currency}</p>
      <div className="m-2 weather-info block text-sm text-white">
        USD: {toUSD ? toUSD : f({ id: 'load' })}
        <br />
        EUR: {toEUR ? toEUR : f({ id: 'load' })}
        <br />
        RUB: {toRUB ? toRUB : f({ id: 'load' })}
      </div>
    </div>
  );
};
