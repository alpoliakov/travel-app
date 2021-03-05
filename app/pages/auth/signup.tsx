import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

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

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <motion.div initial="initial" animate="enter" exit="exit" variants={postVariants}>
        <h1>Sign Up Page</h1>
      </motion.div>
    </div>
  );
}
