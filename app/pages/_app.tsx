import '../styles/global.css';

import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { IntlProvider } from 'react-intl';

import Layout from '../components/Layout';

const messages = {
  'en-Us': { btn: 'Login', search: 'Search' },
  ru: { btn: 'Войти', search: 'Поиск' },
  uk: { btn: 'Увийти', search: 'Пошук' },
};

function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </IntlProvider>
  );
}

export default MyApp;
