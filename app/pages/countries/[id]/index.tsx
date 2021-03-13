import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Loader from '../../../components/Loader';
import Map from '../../../components/Map';
import { Widgets } from '../../../components/Widgets/Widgets';
import { useCountryQuery } from '../../../lib/graphql/country.graphql';
import { messages } from '../../../locales';

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

  const [,firstImg] = imagesUrl;

  const heroStyle = {
    backgroundImage: `url(${firstImg})`,
    backgroundSize: 'cover',
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
        <div className="container">
          <div className="hero" style={heroStyle}>
            <Header />
            <h1 className="text-white text-center text-9xl text-shadow">
              {dataCountry[locale].name}
            </h1>
            <h2 className="text-5xl text-center text-white text-shadow">
              {messages[locale].capital} - {dataCountry[locale].capital}
            </h2>
            <Widgets />
          </div>
          <div className="country">
            <div className="country__content">
              <p className="text-2xl text-white">{dataCountry[locale].description}</p>
            </div>
            <div className="country__map">
              <Map ISOCode={ISOCode} locale={locale} coordinates={coordinates} />
            </div>
          </div>
          {/*<Footer />*/}
        </div>
      </motion.div>
    </>
  );
}

Country.getInitialProps = ({ query: { id } }) => {
  return { id };
};
