import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <Toaster />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
