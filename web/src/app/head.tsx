import Script from 'next/script';
import { fetchAllSeo } from 'lib/queries';

type HeadProps = {};

export default async function Head({}: HeadProps) {
  const seoData = await fetchAllSeo();

  return (
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

      <title>
        Alvin Sovereign | Maker, Breaker and Tester of all things UI
      </title>

      <Script async strategy='beforeInteractive'>
        {`if (typeof window !== 'undefined' && localStorage.theme === 'dark' || (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
      </Script>
    </head>
  );
}
