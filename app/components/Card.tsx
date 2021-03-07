import React, { useRef } from 'react';

export default function Card({ item }) {
  const { country, capital, src, id } = item;
  const currentCard = useRef();

  const goToCountryPage = (e) => {
    e.stopPropagation();
    e.cancelBubble = true;
    console.log(e.target.id);
  };

  return (
    <div
      className="card hover__item shadow__item"
      role="presentation"
      ref={currentCard}
      onClick={goToCountryPage}
      id={id}
      style={{
        backgroundImage: `url(${src}), linear-gradient(var(--color-grey-light) 1%, var(--color-grey-dark) 100%)`,
      }}>
      <h1 className="shadow__item gradient-text" style={{ fontSize: 82, zIndex: -1 }}>
        {country}
      </h1>
      <h1 className="shadow__item" style={{ color: '#ffffff', zIndex: -1 }}>
        {capital}
      </h1>
    </div>
  );
}
