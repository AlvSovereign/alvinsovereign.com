import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyles } from 'twin.macro';
import { Head, Page } from '../components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const queryClientRef = React.useRef<any>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    });
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <GlobalStyles />
      <Head>
        <title>
          Alvin Sovereign | Maker, Breaker and Tester of all things UI
        </title>
      </Head>
      <Page>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </Page>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
