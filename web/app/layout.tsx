import React from 'react';
import { AboutMe, ClientProviders, Navigation } from 'src/components';
import Head from './head';
import '../styles/globals.css';

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <Head />
      <body className='bg-grey-lighter dark:bg-grey-normal'>
        <div className='relative h-full md:h-screen flex flex-col md:flex-row items-start'>
          <Navigation />
          <main className='container mx-auto flex flex-1 flex-col h-full'>
            <section className='border-b md:border-b-0 border-grey-light p-4 md:hidden'>
              <AboutMe />
            </section>
            <section className='p-4 lg:p-6 md:overflow-y-scroll'>
              {/* <ClientProviders>{children}</ClientProviders> */}
              {children}
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
