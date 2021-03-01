import { FC } from 'react';
import NextHead from 'next/head';

const Head: FC = () => {
  return (
    <NextHead>
      <title>
        Alvin Sovereign | Maker, Breaker and Tester of all things UI
      </title>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='description'
        content='Alvin Sovereign is a London-Based Web Developer specialising in the front end.'
      />

      <meta property='og:url' content='https://alvinsovereign.com' />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content='Alvin Sovereign | Maker, Breaker and Tester of all things UI'
      />
      <meta
        property='og:description'
        content='Alvin Sovereign is a London-Based Web Developer specialising in the front end.'
      />
      <meta property='og:image' content='/images/open_graph_headshot.jpg' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='alvinsovereign.com' />
      <meta property='twitter:url' content='https://alvinsovereign.com' />
      <meta
        name='twitter:title'
        content='Alvin Sovereign | Maker, Breaker and Tester of all things UI'
      />
      <meta
        name='twitter:description'
        content='Alvin Sovereign is a London-Based Web Developer specialising in the front end.'
      />
      <meta name='twitter:image' content='/images/open_graph_headshot.jpg' />
    </NextHead>
  );
};

export default Head;
