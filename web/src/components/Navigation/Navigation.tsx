'use client';
import { FC, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import Image from "next/legacy/image";
import Link from 'next/link';

const Navigation: FC = () => {
  const [imageSrc, setImageSrc] = useState<string>('/images/as_logo_white.svg');
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (isDarkMode) {
      setImageSrc('/images/as_logo_white.svg');
    } else {
      setImageSrc('/images/as_logo_black.svg');
    }
  }, [isDarkMode]);

  return (
    <nav className='flex flex-row h-16 w-full border-solid border-b border-grey-light p-4 md:flex-col md:h-full md:w-48 md:border-b-0 md:border-r md:items-center lg:p-6 dark:border-grey-lighter'>
      <Link href='/'>
        <Image
          src={imageSrc}
          alt='Website logo.'
          layout='intrinsic'
          objectFit='contain'
          width={150}
          height={40}
          priority
        />
      </Link>
    </nav>
  );
};

export default Navigation;
