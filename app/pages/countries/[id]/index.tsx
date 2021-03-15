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
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="container" style={heroStyle}>
        <Head>
          <title>{dataCountry[locale].name}</title>
        </Head>
        <motion.div initial="initial" animate="enter" exit="exit" variants={postVariants}>
          <Header />
          <div className="box px-5">
            <div className="mb-10 mt-10">
              <h1 className="text-white text-center text-7xl shadow__item">
                {dataCountry[locale].name}
              </h1>
              <h2 className="sm:text-5xl text-6xl text-center text-white shadow__item">
                {dataCountry[locale].capital}
              </h2>
            </div>
            <div className="mb-5">
              <Widgets dataCountry={dataCountry} currency={currency} timeZone={timeZone} />
            </div>
            <p className="p-5 w-full text-4xl sm:text-2xl md:text-xl text-white bg-gray-900 bg-opacity-50 mx-5 text-justify text-light-shadow rounded-xl mb-10">
              {dataCountry[locale].description}
            </p>
            <div className="w-full bg-gray-900 rounded-xl bg-opacity-50 mx-5 p-5 mb-10 flex justify-center box-border">
              <Player url={videoUrl} controls light />
            </div>
            <div className="w-full min-w-0 bg-gray-900 rounded-xl bg-opacity-50 mx-5 p-5 pb-0 mb-10 flex justify-center box-border">
              <Carousel id={id} />
            </div>
            <div className="w-full min-w-0 bg-gray-900 rounded-xl bg-opacity-50 mx-5 p-5 mb-10 flex justify-center box-border">
              <Map ISOCode={ISOCode} locale={locale} coordinates={coordinates} />
            </div>
          </div>
          <Footer />
        </motion.div>
      </div>
    </>
  );
}

Country.getInitialProps = ({ query: { id } }) => {
  return { id };
};
