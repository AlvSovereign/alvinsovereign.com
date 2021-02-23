import { FC } from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import BlockContent from '@sanity/block-content-to-react';
import { homepageFetcher, useGetHomepage } from '../hooks';
import { Text } from '../components';
import { Experience, Pages } from '../types';

const Index: FC = () => {
  const { data } = useGetHomepage();

  const { _id = null, experience = null, slug = null } = data;

  return (
    <>
      {(experience || []).map(
        ({ description, role, technologies, title }: Experience) => (
          <>
            <Text component='h2' variant='h2'>
              {title}
            </Text>
            <Text component='h3' variant='h3'>
              {role}
            </Text>
            <BlockContent blocks={description} />
          </>
        )
      )}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('homepage', homepageFetcher);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
