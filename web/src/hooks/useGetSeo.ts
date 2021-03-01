import { useQuery } from 'react-query';
import { gql, request } from 'graphql-request';

const query = gql`
  query SeoData {
    allSeo {
      description
      domain
      image {
        asset {
          url
        }
      }
      title
      url
    }
  }
`;

export const fetcher = () =>
  request(process.env.NEXT_PUBLIC_SANITY_URL, query).then((data) => {
    return data.allSeo[0];
  });

const useGetSeo = () => {
  return useQuery('seo', fetcher);
};

export default useGetSeo;
