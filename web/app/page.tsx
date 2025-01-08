import { fetchHomepage } from 'lib/queries';
import { WorkExperience } from 'src/components';

export default async function Index() {
  const data = await fetchHomepage();
  const { experience = null } = data;

  return <WorkExperience experience={experience} />;
}

export const revalidate = 60 * 60 * 24;

// export const getStaticProps = async () => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery('homepage', homepageFetcher);

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//       revalidate: 60 * 60 * 24,
//     },
//   };
// };
