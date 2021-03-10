import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

export const TimeWidget = ({ timeZone }) => {
  const { formatMessage: f, locale } = useIntl();
  const [todayTime, setTodayTime] = useState(
    new Date().toLocaleTimeString(`${locale}`, {
      timeZone: `${timeZone}`,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }),
  );
  const [todayDate, setTodayDate] = useState(
    new Date().toLocaleDateString(`${locale}`, {
      timeZone: `${timeZone}`,
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTodayTime(
        new Date().toLocaleTimeString(`${locale}`, {
          timeZone: `${timeZone}`,
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }),
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(
    () =>
      setTodayDate(
        new Date().toLocaleDateString(`${locale}`, {
          timeZone: `${timeZone}`,
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        }),
      ),
    [locale],
  );

  return (
    <div className="m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl">
      <p className="text-white font-medium text-center text-lg font-bold uppercase">
        {todayDate ? todayDate : f({ id: 'load' })}
      </p>
      <p className="m-2 weather-info block text-sm text-center text-white">
        {todayTime ? todayTime : f({ id: 'load' })}
      </p>
    </div>
  );
};
