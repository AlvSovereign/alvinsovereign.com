import React from 'react';
import { AboutMe, Navigation } from 'src/components';
import '../styles/globals.css';
import { fetchAllSeo } from 'lib/queries';
import Script from 'next/script';
import ClientProviders from 'src/components/Providers/ClientProviders';

type RootLayoutProps = { children: React.ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const seoData = await fetchAllSeo();

  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='description' content={seoData.description} />

        <meta property='og:url' content={seoData.url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={seoData.title} />
        <meta property='og:description' content={seoData.description} />
        <meta property='og:image' content={seoData.image.asset.url} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content={seoData.domain} />
        <meta property='twitter:url' content={seoData.url} />
        <meta name='twitter:title' content={seoData.title} />
        <meta name='twitter:description' content={seoData.description} />
        <meta name='twitter:image' content={seoData.image.asset.url} />

        <link rel='icon' href='/favicon.ico' />
        <link
          rel='preload'
          href='/fonts/Geomanist-Light.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Geomanist-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/Geomanist-Medium.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />

        <title>{seoData.title}</title>
      </head>
      <body className='bg-grey-lighter dark:bg-grey-normal'>
        <div className='relative h-full md:h-screen flex flex-col md:flex-row items-start'>
          <Navigation />
          <main className='container mx-auto flex flex-1 flex-col h-full'>
            <section className='border-b md:border-b-0 border-grey-light p-4 md:hidden'>
              <AboutMe />
            </section>
            <section className='p-4 lg:p-6 md:overflow-y-scroll'>
              <ClientProviders>{children}</ClientProviders>
            </section>
          </main>
          <footer className='container mx-auto hidden md:flex flex-col md:justify-end h-auto md:h-full md:w-60 p-4 lg:p-6 border-solid border-l-0 md:border-l border-grey-light dark:border-grey-lighter'>
            <AboutMe />
          </footer>
        </div>
      </body>
    </html>
  );
}
