import { useRouter } from 'next/router';
import React, { useRef } from 'react';

export default function Card({ item }) {
  const { country, capital, src, id } = item;
  const currentCard = useRef();
  const router = useRouter();

  const goToCountryPage = (e) => {
    const currentId = e.target.dataset.id;
    console.log(currentId);
    router.push(`/country/${currentId}`);
  };

  return (
    <div
      className="card hover__item shadow__item"
      role="presentation"
      ref={currentCard}
      onClick={goToCountryPage}
      data-id={id}
      id={id}
      style={{
        backgroundImage: `url(${src}), linear-gradient(var(--color-grey-light) 1%, var(--color-grey-dark) 100%)`,
      }}>
      <h1 className="shadow__item gradient-text" data-id={id} style={{ fontSize: 82, zIndex: -1 }}>
        {country}
      </h1>
      <h1 className="shadow__item" data-id={id} style={{ color: '#ffffff', zIndex: -1 }}>
        {capital}
      </h1>
    </div>
  );
}
