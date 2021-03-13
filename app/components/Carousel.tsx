import { useEffect, useRef, useState } from 'react';
import { useFullscreen, useToggle } from 'react-use';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { usePlacesQuery } from '../lib/graphql/places.graphql';

SwiperCore.use([Navigation]);

export const Carousel = ({ id }) => {
  const ref = useRef(null);
  const [show, toggle] = useToggle(false);
  useFullscreen(ref, show, { onClose: () => toggle(false) });

  const { data, loading } = usePlacesQuery({ variables: { countryId: id } });
  const [places, setPlaces] = useState(null);

  useEffect(() => {
    if (data) {
      setPlaces([...data.places]);
      console.log('places', data.places);
    }

    console.log('data', data);
  }, [data, loading]);

  useEffect(() => console.log('render'));

  return (
    <div ref={ref} className="p-5">
      {places && (
        <Swiper tag="section" navigation loop spaceBetween={30} slidesPerView={1} centeredSlides>
          {places.map((place) => (
            <SwiperSlide key={place._id}>
              <img src={place.imagesUrl[0]} alt="image1" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
};
