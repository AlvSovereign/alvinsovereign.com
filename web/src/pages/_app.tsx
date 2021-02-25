import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
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
      <Head />
      <Page>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </Page>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
