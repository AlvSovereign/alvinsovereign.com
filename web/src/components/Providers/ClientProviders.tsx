'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type ClientProvidersProps = { children: React.ReactNode };

export default function ClientProviders({ children }: ClientProvidersProps) {
  const queryClientRef = React.useRef<any>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: { queries: { refetchOnWindowFocus: false } },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {children}
    </QueryClientProvider>
  );
}
