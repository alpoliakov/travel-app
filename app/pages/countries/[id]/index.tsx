import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { Carousel } from '../../../components/Carousel';
import Loader from '../../../components/Loader';
import Map from '../../../components/Map';
import Places from '../../../components/Places';
import { Widgets } from '../../../components/Widgets/Widgets';
import { useCountryQuery } from '../../../lib/graphql/country.graphql';
import { usePlacesQuery } from '../../../lib/graphql/places.graphql';

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
  // const { data, loading } = usePlacesQuery({
  //   variables: { countryId: id },
  // });

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

  return (
    <div className="box">
      <Head>
        <title>{dataCountry[locale].name}</title>
      </Head>
      <motion.div initial="initial" animate="enter" exit="exit" variants={postVariants}>
        <Link href="/">
          <a style={{ color: 'white' }}>Home</a>
        </Link>
        {loading && <Loader show={loading} />}
        {!loading && data && (
          <div>
            <h1 className="text-white text-3xl">{dataCountry[locale].name}</h1>
            <Carousel id={id} />
            <Widgets dataCountry={dataCountry} currency={currency} timeZone={timeZone} />
            <Map ISOCode={ISOCode} locale={locale} coordinates={coordinates} />
            <Places id={id} />
          </div>
        )}
      </motion.div>
    </div>
  );
}

Country.getInitialProps = ({ query: { id } }) => {
  return { id };
};
