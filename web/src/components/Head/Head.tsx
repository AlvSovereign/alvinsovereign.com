import { FC } from 'react';
import NextHead from 'next/head';

const Head: FC = () => {
  return (
    <NextHead>
      <title>Alvin Sovereign | Web Developer</title>
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='description'
        content='Alvin Sovereign is a London-Based Web Developer specialising in the front end.'
      />
    </NextHead>
  );
};

export default Head;
