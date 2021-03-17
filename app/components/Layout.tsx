import Head from 'next/head';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import ToaasterLayout from './ToaasterLayout';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <ToaasterLayout />
      <Toaster />
      {children}
    </>
  );
}
