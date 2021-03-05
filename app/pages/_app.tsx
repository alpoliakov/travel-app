import '../styles/global.css';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

import Footer from '../components/Footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
