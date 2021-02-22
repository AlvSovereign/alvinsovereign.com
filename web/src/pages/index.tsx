import { FC } from 'react';
import Image from 'next/image';
import { Text } from '../components';

type IndexProps = {};

const Index: FC<IndexProps> = ({}) => {
  return (
    <>
      <Text color='primary' component='h3' variant='h1'>
        Wunderman Thompson
      </Text>
      <Text color='primary' component='h3' variant='h1'>
        Azoomee / Da Vinci Kids
      </Text>
      <Text color='primary' component='h3' variant='h1'>
        Idean UK
      </Text>
      <Text color='primary' component='h3' variant='h1'>
        Dixons Carphone
      </Text>
    </>
  );
};

export default Index;
