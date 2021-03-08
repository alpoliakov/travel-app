import Head from 'next/head';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import { Widgets } from './Widgets/Widgets';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Header />
      {/* widgets will be added to country-page and will be removed from here */}
      <Widgets /> 
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
