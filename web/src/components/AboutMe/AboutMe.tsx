import { FC } from 'react';
import Image from 'next/image';
import { At, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';

type AboutMeProps = {};

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <>
      <div className='relative hidden md:block mb-8'>
        <Image
          alt='Headshot of Alvin Sovereign.'
          height={400}
          width={320}
          layout='intrinsic'
          objectFit='cover'
          src='/images/headshot.jpg'
          priority
        />
      </div>
      <p className='mb-6 md:mb-8 text-center md:text-left text-grey-normal dark:text-grey-lighter'>
        {`Hi, I'm `}
        <span className='text-slate-blue-normal dark:text-slate-yellow-normal'>
          Alvin Sovereign
        </span>
        <span className='text-grey-normal dark:text-grey-lighter'>
          {` a London-based `}
        </span>
        <span className='text-slate-blue-normal dark:text-slate-yellow-normal'>
          {`Senior Front End Developer`}
        </span>
        <span className='text-grey-normal dark:text-grey-lighter'>
          {` with over 9 years experience in breaking, making and testing user
            interfaces.`}
        </span>
      </p>
      <p className='text-center md:text-left leading-5 mb-6 text-grey-normal dark:text-grey-lighter'>
        {`I'm currently`}
        <span className='text-slate-blue-normal dark:text-slate-yellow-normal'>
          {` available`}
        </span>
        <span className='text-grey-normal dark:text-grey-lighter'>
          {` for new projects. Please get in touch.`}
        </span>
      </p>
      <div className='flex flex-row items-center justify-center'>
        <a
          aria-label='Visit my LinkedIn profile page.'
          className='mx-2'
          href='www.linkedin.com/in/alvinsovereign'
          target='_blank'
          rel='noreferrer'>
          <LinkedinLogo
            size={36}
            className='text-slate-blue-normal dark:text-slate-yellow-normal'
            weight='fill'
          />
        </a>
        <a
          className='mx-2'
          aria-label='Send an email to my inbox.'
          href='mailto:web@alvinsovereign.com?subject=From%20alvinsovereign.com'
          target='_top'
          rel='noreferrer'>
          <At
            size={36}
            className='text-slate-blue-normal dark:text-slate-yellow-normal'
            weight='fill'
          />
        </a>
      </div>
    </>
  );
};

export default AboutMe;
