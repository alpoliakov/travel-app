import { useRouter } from 'next/router';
import React from 'react';

import { useAuth } from '../lib/useAuth';
import { getRandomImg } from '../utils/utils';

export default function Card({ item }) {
  const { _id, data, imagesUrl } = item;
  const { user } = useAuth();
  console.log('tada', imagesUrl);
  const randomImgArr = getRandomImg(imagesUrl);

  const router = useRouter();
  const { locale } = useRouter();

  const goToCountryPage = (e) => {
    const currentId = e.target.dataset.id;
    console.log(currentId);

    router.push(`/countries/${_id}`);
  };

  return (
    <div
      className="card hover__item shadow__item p-3"
      role="presentation"
      onClick={goToCountryPage}
      data-id={_id}
      style={{
        backgroundImage: `url(${randomImgArr[0]}), linear-gradient(var(--color-grey-light) 1%, var(--color-grey-dark) 100%)`,
      }}>
      <h1
        className="shadow__item gradient-text font-semibold"
        data-id={_id}
        style={{ fontSize: 42, zIndex: -1 }}>
        {data[locale].name}
      </h1>
      <h1
        className="shadow__item lowercase gradient-text font-semibold text-2xl"
        data-id={_id}
        style={{ color: '#ffffff', zIndex: -1 }}>
        {data[locale].capital}
      </h1>
    </div>
  );
}
