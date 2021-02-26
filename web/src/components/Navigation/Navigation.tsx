import { FC } from 'react';
import { useMedia } from 'react-use';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';

type NavigationProps = {};

const Navigation: FC<NavigationProps> = ({}) => {
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');

  return (
    <nav tw='flex h-16 md:h-full w-full md:w-48 border-solid border-b md:border-b-0 md:border-r border-grey-light dark:border-grey-lighter p-4 lg:p-6'>
      <Link href='/'>
        <a>
          <Image
            src={
              isDarkMode
                ? '/images/as_logo_white.svg'
                : '/images/as_logo_black.svg'
            }
            alt='Website logo.'
            width={150}
            height={40}
          />
        </a>
      </Link>
    </nav>
  );
};

export default Navigation;
