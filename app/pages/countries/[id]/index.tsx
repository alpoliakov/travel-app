import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import Loader from '../../../components/Loader';
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
  // const { data, loading } = usePlacesQuery({
  //   variables: { countryId: id },
  // });

  const { data, loading } = useCountryQuery({
    variables: { countryId: id },
  });

  const { locale } = useRouter();

  useEffect(() => {
    console.log(data);
  }, [data, loading]);

  return (
    <div className="box">
      <Head>
        <title>Country</title>
      </Head>
      <motion.div initial="initial" animate="enter" exit="exit" variants={postVariants}>
        <Link href="/">
          <a style={{ color: 'white' }}>Home</a>
        </Link>
        {loading && <Loader show={loading} />}
        {!loading && data && (
          <div>
            <h1 className="text-white text-3xl">{data.country.data[locale].name}</h1>
            <Widgets />
          </div>
        )}
      </motion.div>
    </div>
  );
}

Country.getInitialProps = ({ query: { id } }) => {
  return { id };
};
