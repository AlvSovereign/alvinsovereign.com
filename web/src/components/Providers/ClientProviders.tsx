'use client';

import React, { useEffect } from 'react';

type ClientProvidersProps = { children: React.ReactNode };

export default function ClientProviders({ children }: ClientProvidersProps) {
  useEffect(() => {
    console.log('ClientProviders');
    if (
      (typeof window !== 'undefined' && localStorage.theme === 'dark') ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return <>{children}</>;
}
