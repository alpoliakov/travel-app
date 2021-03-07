import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as React from 'react';

import Card from '../components/Card';
import data from '../data/data';

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

  return (
    <div className="box">
      <Head>
        <title>Countries</title>
      </Head>
      <motion.div
        style={{ padding: '0 20px', margin: '0 auto' }}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={postVariants}>
        <section>
          <div style={{ color: '#ffffff' }}>Current locale: {locale}</div>
        </section>
        <div className="countries">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
