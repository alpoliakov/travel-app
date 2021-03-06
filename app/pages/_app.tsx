import '../styles/global.css';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import { IntlProvider } from 'react-intl';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();
  console.log(router);

  return (
    <IntlProvider locale={locale}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </IntlProvider>
  );
}

export default MyApp;
