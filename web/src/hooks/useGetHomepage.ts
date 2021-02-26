import { useQuery } from 'react-query';
import { gql, request } from 'graphql-request';

const query = gql`
  {
    allPages(where: { slug: { current: { matches: "/" } } }) {
      _id
      experience {
        _id
        date
        description: descriptionRaw
        role
        technologies {
          title
        }
        title
        url
      }
      slug {
        current
      }
    }
  }
`;

export const fetcher = () =>
  request(process.env.NEXT_PUBLIC_SANITY_URL, query).then((data) => {
    return data.allPages[0];
  });

const useGetHomepage = () => {
  return useQuery('homepage', fetcher);
};

export default useGetHomepage;
