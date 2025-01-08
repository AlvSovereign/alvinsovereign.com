import { gql, request } from 'graphql-request';

export const getHomepageQuery = gql`
  query Homepage {
    allPages(where: { slug: { current: { matches: "/" } } }) {
      _id
      experience {
        _id
        date
        description: descriptionRaw
        project
        projectUrl
        role
        technologies {
          _id
          title
        }
        title
      }
      slug {
        current
      }
    }
  }
`;

export const allSeoQuery = gql`
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

export const fetchAllSeo = () =>
  request(process.env.NEXT_PUBLIC_SANITY_URL, allSeoQuery).then((data) => {
    return data.allSeo[0];
  });

export const fetchHomepage = () =>
  request(process.env.NEXT_PUBLIC_SANITY_URL, getHomepageQuery).then((data) => {
    return data.allPages[0];
  });
