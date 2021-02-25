import { FC } from 'react';
import Image from 'next/image';
import { At, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import { Text } from '..';

type AboutMeProps = {};

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <>
      <div className='relative hidden md:block mb-8'>
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
        component='p'
        variant='body'>
        {`Hi, I'm `}
        <Text
          className='inline bg-slate-blue-light'
          color='accent'
          component='h1'>
          {`Alvin Sovereign`}
        </Text>
        <Text className='inline' color='secondary' component='h1'>
          {` a London-based `}
        </Text>
        <Text
          className='inline bg-slate-blue-light'
          color='accent'
          component='h1'>
          {`Senior Front End Developer`}
        </Text>
        <Text className='inline' color='secondary' component='h1'>
          {` with over 6 years experience in breaking, making and testing user
            interfaces.`}
        </Text>
      </Text>
      <Text
        className='text-center md:text-left leading-5 mb-6'
        color='secondary'
        component='p'
        variant='body2'>
        {`I'm currently unavailable as I'm doing some awesome UI stuff with `}
        <Text
          className='inline bg-slate-blue-light text-center'
          color='accent'
          component='p'
          variant='body2'>
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
    </>
  );
};

export default AboutMe;
