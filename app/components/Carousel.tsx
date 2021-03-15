import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useFullscreen } from 'react-use';
import SwiperCore, { A11y, Controller, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { usePlacesQuery } from '../lib/graphql/places.graphql';

SwiperCore.use([Navigation, Controller, A11y]);

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
                <div className="relative pb-1/2">
                  <img
                    src={place.imagesUrl[0]}
                    alt={place.data[locale].name}
                    className="absolute h-full rounded-xl w-full object-cover"
                  />
                </div>
                <h3 className="text-5xl sm:text-4xl md:text-3xl lg:text-2xl p-2 bg-gray-900 rounded-xl bg-opacity-50 absolute top-5 left-5 text-white">
                  {place.data[locale].name}
                </h3>
                <p className="place_description text-2xl sm:text-xl md:text-lg lg:text-sm p-5 bg-gray-900 rounded-xl bg-opacity-50 absolute bottom-5 left-5 right-5 text-white">
                  {place.data[locale].description}
                </p>
                <button
                  className="text-white hover:bg-opacity-100 hover:text-opacity-70 focus:outline-none text-4xl sm:text-3xl md:text-2xl lg:text-xl p-2 bg-gray-900 rounded-xl bg-opacity-50 absolute top-5 right-5"
                  onClick={() => setIsFullscreen((isFullscreen) => !isFullscreen)}>
                  {isFullscreen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  )}
                </button>
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
                <img
                  src={place.imagesUrl[0]}
                  alt={place.data[locale].name}
                  className="rounded-xl w-full object-cover h-48 sm:h-44 md:h-40 lg:h-36"
                />
                <p className="text-white text-center mt-3">Rating</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </div>
  );
}
