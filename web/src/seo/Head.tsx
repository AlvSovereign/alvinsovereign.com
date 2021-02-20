import { FC } from 'react';
import Head from 'next/head';

type HeadProps = {};

const SEOHead: FC<HeadProps> = ({}) => {
  return (
    <Head>
      <title>My page title</title>
      <link
        rel='preload'
        href='/fonts/Geomanist-Light.woff2'
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
      <link
        rel='preload'
        href='/fonts/Geomanist-Regular.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
    </Head>
  );
};

export default SEOHead;
