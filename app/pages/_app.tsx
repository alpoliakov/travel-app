import '../styles/global.css';

import { ApolloProvider } from '@apollo/client';
import { AnimatePresence } from 'framer-motion';
import { useApollo } from 'lib/apollo';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import Layout from '../components/Layout';
import { AuthProvider } from '../lib/useAuth';
import { messages } from '../locales';

function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <AuthProvider>
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </AuthProvider>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default MyApp;
