import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type PageProps = { children: ReactNode };

const Page: FC<PageProps> = ({ children }) => {
  return (
    <>
      <div className='absolute inset-0 md:hidden lg:hidden xl:hidden 2xl:hidden -z-10'>
        <Image
          alt='Headshot of Alvin Sovereign.'
          layout='fill'
          objectFit='cover'
          src='/images/headshot.jpg'
        />
      </div>
      <div className='container mx-auto relative h-screen flex items-center'>
        <nav className='absolute top-0 flex items-center w-full h-16 p-6'>
          <Link href='/'>
            <a>
              <Image
                src='/images/as_logo_black.svg'
                alt='Website logo.'
                width={150}
                height={60}
              />
            </a>
          </Link>
        </nav>
        {children}
      </div>
    </>
  );
};

export default Page;
