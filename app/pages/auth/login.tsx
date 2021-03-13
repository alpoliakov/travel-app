import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

import Header from '../../components/Header';
import LoginForm from '../../components/LoginForm';
import Footer from "../../components/Footer";

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

export default function Login() {
  const router = useRouter();

  return (
    <div className="container default-page">
      <Header />
      <div className="box">
        <Head>
          <title>Login</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <motion.div
          className="flex justify-center w-full max-w-lg"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={postVariants}>
          <LoginForm />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
