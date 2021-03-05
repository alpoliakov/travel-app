import Document, { Head, Html, Main, NextScript } from 'next/document';
import GoogleFonts from 'next-google-fonts';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="HandheldFriendly" content="true" />
          <meta name="keywords" content="travel-app" />
          <meta name="description" content="Travel app" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
            media="print"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
            />
          </noscript>
        </Head>
        <body className="antialiased font-sans text-gray-500 dark:text-gray-200 bg-white dark:bg-gray-900 h-full w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
