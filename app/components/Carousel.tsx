import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useFullscreen } from 'react-use';
import SwiperCore, { Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { usePlacesQuery } from '../lib/graphql/places.graphql';

SwiperCore.use([Navigation, Controller]);

export default function Carousel({ id }) {
  const { locale } = useRouter();

  const { data, loading } = usePlacesQuery({ variables: { countryId: id } });
  const [places, setPlaces] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledThumbsSwiper, setControlledThumbsSwiper] = useState(null);

  const ref = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  useFullscreen(ref, isFullscreen, { onClose: () => setIsFullscreen(false) });

  useEffect(() => {
    if (data) {
      setPlaces([...data.places]);
    }
  }, [data, loading]);

  return (
    <div ref={ref} className="gallery">
      {places && (
        <>
          <Swiper
            navigation
            loop
            lazy
            centeredSlides
            spaceBetween={30}
            loopedSlides={6}
            controller={{ control: controlledSwiper }}
            onSwiper={setControlledThumbsSwiper}
            className="gallery-top">
            {places.map((place) => (
              <SwiperSlide key={place._id}>
                <img
                  src={place.imagesUrl[0]}
                  alt={place.data[locale].name}
                  className="place_image"
                />
                <div className="place_info">
                  <h3 className="place_name">{place.data[locale].name}</h3>
                  <p className="place_description">{place.data[locale].description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            loop
            lazy
            centeredSlides
            slideToClickedSlide
            spaceBetween={10}
            controller={{ control: controlledThumbsSwiper }}
            onSwiper={setControlledSwiper}
            loopedSlides={6}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className="gallery-thumbs">
            {places.map((place) => (
              <SwiperSlide key={place._id}>
                <img src={place.imagesUrl[0]} alt={place.data[locale].name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      <button
        className="fullscreen"
        onClick={() => setIsFullscreen((isFullscreen) => !isFullscreen)}>
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
    </div>
  );
}
