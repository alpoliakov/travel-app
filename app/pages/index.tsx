import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Card from '../components/Card';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import { Country, useCountriesQuery } from '../lib/graphql/countries.graphql';
import Header from "../components/Header";
import Footer from "../components/Footer";

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

interface item {
  country: string;
  capital: string;
  src: string;
  id: number;
}

export default function Home() {
  const { locale } = useRouter();
  const { data, loading, refetch } = useCountriesQuery({ errorPolicy: 'ignore' });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Head>
        <title>Countries</title>
      </Head>
      <div className="container default-page">
        <Header />
        <div className="box">
          <motion.div
            style={{ padding: '0 20px', margin: '0 auto' }}
            initial="initial"
            animate="enter"
            exit="exit"
            variants={postVariants}>
            <section>
              <div style={{ color: '#ffffff' }}>Current locale: {locale}</div>
            </section>
            {loading && <Loader show={loading} />}
            {!loading && data && data.countries && (
              <div className="countries">
                {data.countries.map((item) => (
                  <Card key={item._id} item={item as Country} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
