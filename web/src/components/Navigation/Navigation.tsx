import { FC } from 'react';
import { useMedia } from 'react-use';
import tw from 'twin.macro';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Text } from '..';
import { AllPages } from '../../types';
import pagesData from '../../data/allPages.json';

const Navigation: FC = () => {
  const { pathname } = useRouter();
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');

  return (
    <nav tw='flex flex-row h-16 w-full border-solid border-b border-grey-light p-4 md:(flex-col h-full w-48 border-b-0 border-r items-center) lg:(p-6) dark:(border-grey-lighter)'>
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
            priority
          />
        </a>
      </Link>
      <div className='flex flex-1 items-center'>
        {/* {(pagesData.allPages || []).map(({ _id, slug, title }: AllPages) => (
          <Link href={slug.current} key={_id}>
            <a css={pathname === slug.current && tw`pointer-events-none`}>
              <Text
                component='span'
                color={pathname === slug.current ? 'accent' : 'primary'}
                variant='body'>
                {title.toUpperCase()}
              </Text>
            </a>
          </Link>
        ))} */}
      </div>
    </nav>
  );
};

export default Navigation;
