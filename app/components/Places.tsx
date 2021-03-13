import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { usePlacesQuery } from '../lib/graphql/places.graphql';
import Loader from './Loader';
import Modal from './Modal';

export default function Places({ id }) {
  const { data, loading } = usePlacesQuery({
    variables: { countryId: id },
  });

  const { locale } = useRouter();
  const [places, setPlaces] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data) {
      setPlaces([...data.places]);
      console.log(data.places);
    }
  }, [data, loading]);

  return (
    <div className="places">
      {!loading &&
        data &&
        places.map((place) => (
          <div
            key={place._id}
            className="card hover__item shadow__item p-3"
            role="presentation"
            data-id={place._id}
            style={{
              height: 300,
              backgroundImage: `url(${place.imagesUrl[0]}), linear-gradient(var(--color-grey-light) 1%, var(--color-grey-dark) 100%)`,
            }}>
            {showModal && <Modal setShowModal={setShowModal} />}
            <h1
              className="shadow__item text-white text-center font-semibold"
              data-id={place._id}
              style={{ fontSize: 32, zIndex: -1 }}>
              {place.data[locale].name}
            </h1>
            <h1
              className="shadow__item opacity-0 hover:opacity-1 lowercase gradient-text font-semibold text-sm"
              data-id={place._id}
              style={{ color: '#ffffff' }}>
              {place.data[locale].description}
            </h1>
          </div>
        ))}
    </div>
  );
}
