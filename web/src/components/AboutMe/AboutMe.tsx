import { FC } from 'react';
import Image from 'next/image';
import { At, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import tw from 'twin.macro';
import { Text } from '..';

type AboutMeProps = {};

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <>
      <div tw='relative hidden md:block mb-8'>
        <Image
          alt='Website logo.'
          height={400}
          width={320}
          layout='intrinsic'
          objectFit='cover'
          src='/images/headshot.jpg'
          priority
        />
      </div>
      <Text
        tw='mb-6 md:mb-8 text-center md:text-left'
        color='primary'
        component='p'
        variant='body'>
        {`Hi, I'm `}
        <Text tw='inline' color='accent' component='h1'>
          {`Alvin Sovereign`}
        </Text>
        <Text tw='inline' color='primary' component='h1'>
          {` a London-based `}
        </Text>
        <Text tw='inline' color='accent' component='h1'>
          {`Senior Front End Developer`}
        </Text>
        <Text tw='inline' color='primary' component='h1'>
          {` with over 6 years experience in breaking, making and testing user
            interfaces.`}
        </Text>
      </Text>
      <Text
        tw='text-center md:text-left leading-5 mb-6'
        color='primary'
        component='p'
        variant='body2'>
        {`I'm currently unavailable as I'm doing some awesome UI stuff with `}
        <Text
          tw='inline text-center'
          color='accent'
          component='p'
          variant='body2'>
          Wunderman Thompson.
        </Text>
      </Text>
      <div tw='flex flex-row items-center justify-end'>
        <a
          aria-label='Visit my Instagram profile page.'
          tw='mx-2'
          href='https://www.instagram.com/alvinsovereign.dev/'
          target='_blank'>
          <InstagramLogo
            size={36}
            tw='text-slate-blue-normal dark:text-slate-yellow-normal'
            weight='fill'
          />
        </a>
        <a
          aria-label='Visit my LinkedIn profile page.'
          tw='mx-2'
          href='www.linkedin.com/in/alvinsovereign'
          target='_blank'>
          <LinkedinLogo
            size={36}
            tw='text-slate-blue-normal dark:text-slate-yellow-normal'
            weight='fill'
          />
        </a>
        <a
          tw='mx-2'
          aria-label='Send an email to my inbox.'
          href='mailto:web@alvinsovereign.com?subject=From%20alvinsovereign.com'
          target='_top'>
          <At
            size={36}
            tw='text-slate-blue-normal dark:text-slate-yellow-normal'
            weight='fill'
          />
        </a>
      </div>
    </>
  );
};

export default AboutMe;
