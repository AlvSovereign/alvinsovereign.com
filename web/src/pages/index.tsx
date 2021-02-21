import { FC } from 'react';
import Image from 'next/image';
import { Text } from '../components';

type IndexProps = {};

const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <section className='h-96 flex flex-col-reverse md:flex-row max-w-4xl mx-auto'>
        <div className='flex-1 h-full relative hidden md:block lg:block xl:block 2xl:block'>
          <Image
            alt='Headshot of Alvin Sovereign.'
            layout='fill'
            objectFit='contain'
            src='/images/headshot.jpg'
          />
        </div>
        <div className='flex flex-1 flex-col justify-between'>
          <Text color='secondary' component='h1' variant='h2'>
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
          <Text className='inline' component='p' variant='body'>
            {`I'm currently unavailable as I'm doing some awesome UI stuff with `}
            <Text
              className='inline bg-slate-blue-light'
              color='accent'
              component='p'
              variant='body'>
              Wunderman Thompson.
            </Text>
          </Text>
          <div className='flex flex-row w-full'>
            <Text className='uppercase mr-4'>Instagram</Text>
            <Text className='uppercase'>Contact</Text>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
