import { NextPage } from 'next';
import { useRef } from 'react';
import { useFullscreen, useToggle } from 'react-use';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

type CarouselProps = {
  photos: string[];
};

export const Carousel: NextPage<CarouselProps> = ({ photos }) => {
  const ref = useRef(null);
  const [show, toggle] = useToggle(false);
  useFullscreen(ref, show, { onClose: () => toggle(false) });

  return (
    <div ref={ref}>
      <Swiper tag="section" navigation loop spaceBetween={30} slidesPerView="auto" centeredSlides>
        {photos.map((url) => (
          <SwiperSlide key={url}>
            <img src={url} alt="image1" />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => toggle()}>Toggle</button>
    </div>
  );
};
