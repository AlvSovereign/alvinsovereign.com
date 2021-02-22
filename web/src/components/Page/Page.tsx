import { FC, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { At, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Text } from '..';

type PageProps = { children: ReactNode };

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className='relative h-screen flex flex-col md:flex-row items-start bg-grey-lighter dark:bg-grey'>
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
      <main className='container mx-auto flex flex-col-reverse md:flex-row h-full'>
        <section className='flex flex-1 flex-col h-full w-auto p-4 lg:p-6 overflow-y-scroll'>
          {children}
        </section>
        <footer className='flex h-auto md:h-full md:w-60 lg:w-80 p-4 lg:p-6 border-solid border-b md:border-b-0 border-l-0 md:border-l border-grey-light'>
          <div className='relative flex flex-col flex-1 md:justify-end'>
            <div className='hidden md:block mb-8'>
              <Image
                alt='Website logo.'
                height={400}
                width={320}
                layout='intrinsic'
                objectFit='contain'
                src='/images/headshot.jpg'
              />
            </div>
            <Text
              className='mb-6 md:mb-8 text-center md:text-left'
              color='secondary'
              component='h1'
              variant='body'>
              {`Hi, I'm `}
              <Text
                className='inline bg-slate-blue-light'
                color='accent'
                component='span'>
                {`Alvin Sovereign`}
              </Text>
              <Text className='inline' color='secondary' component='span'>
                {` a London-based `}
              </Text>
              <Text
                className='inline bg-slate-blue-light'
                color='accent'
                component='span'>
                {`Senior Front End Developer`}
              </Text>
              <Text className='inline' color='secondary' component='p'>
                {` with over 6 years experience in breaking, making and testing user
            interfaces.`}
              </Text>
            </Text>
            <Text
              className='inline text-center md:text-left text-base leading-5 mb-6'
              color='secondary'
              component='p'>
              {`I'm currently unavailable as I'm doing some awesome UI stuff with `}
              <Text
                className='inline bg-slate-blue-light  text-base'
                color='accent'
                component='p'>
                Wunderman Thompson.
              </Text>
            </Text>
            <div className='flex flex-row item-center justify-end'>
              <a
                className='mr-4'
                href='https://www.instagram.com/alvinsovereign.dev/'
                target='_blank'>
                <InstagramLogo size={36} color='#30466D' weight='fill' />
              </a>
              <a
                className='mr-4'
                href=' www.linkedin.com/in/alvinsovereign'
                target='_blank'>
                <LinkedinLogo size={36} color='#30466D' weight='fill' />
              </a>
              <a
                href='mailto:web@alvinsovereign.com?subject=From%20alvinsovereign.com'
                target='_top'>
                <At size={36} color='#30466D' weight='fill' />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Page;
