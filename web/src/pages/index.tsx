import { FC } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { homepageFetcher, useGetHomepage } from '../hooks';
import { WorkExperience } from '../components';

const Index: FC = () => {
  const { data } = useGetHomepage();
  const { experience = null } = data;

  return <WorkExperience experience={experience} />;
};

export default Index;

export const getStaticProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('homepage', homepageFetcher);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      revalidate: 60 * 60 * 24,
    },
  };
};
