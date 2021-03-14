import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Player from 'react-player/youtube';

import Carousel from '../../../components/Carousel';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import Map from '../../../components/Map';
import Places from '../../../components/Places';
import { Widgets } from '../../../components/Widgets/Widgets';
import { useCountryQuery } from '../../../lib/graphql/country.graphql';
import { getRandomImg } from '../../../utils/utils';

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};

export default function Country({ id }) {
  const { locale } = useRouter();
  const [countryInfo, setCountryInfo] = useState(null);
  const { data, loading } = useCountryQuery({
    variables: { countryId: id },
  });

  useEffect(() => {
    console.log(data);
    setCountryInfo(data);
  }, [data, loading]);

  if (!countryInfo) {
    return <Loader show />;
  }

  const {
    country: { ISOCode, coordinates, data: dataCountry, currency, timeZone, videoUrl, imagesUrl },
  } = countryInfo;

  const imgUrl = getRandomImg(imagesUrl);

  const heroStyle = {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <Head>
        <title>{dataCountry[locale].name}</title>
      </Head>
      <motion.div
        className="w-full"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={postVariants}>
        <div className="container country" style={heroStyle}>
          <Header />
          <div className="box">
            <h1 className="text-white text-center sm:text-7xl text-4xl shadow__item">
              {dataCountry[locale].name}
            </h1>
            <h2 className="sm:text-3xl text-2xl text-center text-white shadow__item">
              {dataCountry[locale].capital}
            </h2>
            <div className="mb-5">
              <Widgets dataCountry={dataCountry} currency={currency} timeZone={timeZone} />       
            </div>
            <p className="p-5 sm:text-sm lg:text-xl text-sm text-white bg-gray-900 bg-opacity-50 mx-5 text-justify text-light-shadow rounded-2xl mb-10">
              {dataCountry[locale].description}
            </p>
            <Map ISOCode={ISOCode} locale={locale} coordinates={coordinates} />
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

Country.getInitialProps = ({ query: { id } }) => {
  return { id };
};
