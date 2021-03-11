import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import Map from "../../components/Map";

import { Widgets } from '../../components/Widgets/Widgets';

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

export default function Country() {
  const router = useRouter();
  const { query, locale } = router;
  console.log(query);

  return (
    <div className="box">
      <Head>
        <title>Country</title>
      </Head>
      <motion.div initial="initial" animate="enter" exit="exit" variants={postVariants} style={{width: '100%'}}>
        <h1>Country Page</h1>
        <Widgets />
        <Map locale={locale} />
      </motion.div>
    </div>
  );
}
