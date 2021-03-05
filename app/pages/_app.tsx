import '../styles/global.css';

import { AnimatePresence } from 'framer-motion';
import React from 'react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
