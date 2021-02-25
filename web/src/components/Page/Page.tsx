import { FC, ReactNode } from 'react';
import { At, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import Image from 'next/image';
import { AboutMe, Navigation } from '..';

type PageProps = { children: ReactNode };

const Page: FC<PageProps> = ({ children }) => {
  return (
    <div className='relative h-full md:h-screen flex flex-col md:flex-row items-start'>
      <Navigation />
      <main className='container mx-auto flex flex-1 flex-col h-full'>
        <section className='border-b md:border-b-0 border-grey-light p-4 md:hidden'>
          <AboutMe />
        </section>
        <section className='p-4 lg:p-6 md:overflow-y-scroll'>
          {children}
        </section>
      </main>
      <footer className='container mx-auto hidden md:flex flex-col md:justify-end h-auto md:h-full md:w-60 p-4 lg:p-6 border-solid border-l-0 md:border-l border-grey-light'>
        <AboutMe />
      </footer>
    </div>
  );
};

export default Page;
