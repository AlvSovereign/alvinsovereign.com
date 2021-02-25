import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type NavigationProps = {};

const Navigation: FC<NavigationProps> = ({}) => {
  return (
    <nav className='flex h-16 md:h-full w-full md:w-48 border-solid border-b md:border-b-0 md:border-r border-grey-light p-4 lg:p-6'>
      <Link href='/'>
        <a>
          <Image
            src='/images/as_logo_black.svg'
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
