import { graphql } from "graphql";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      blogPostsConnection {
        edges {
          node {
            createdAt
            slug
            title
            featuredImage {
              url
            }
            blogCategories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result;
};

export const getPosts2 = async () => {
  const query = gql`
    query MyQuery {
      blogPostsConnection {
        edges {
          node {
            createdAt
            slug
            title
            featuredImage {
              url
            }
            blogCategories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.blogPostsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      blogPost(where: { slug: $slug }) {
        createdAt
        slug
        title
        featuredImage {
          url
        }
        blogCategories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.blogPost;
};

// export const getPostByCategories = async (category) => {
//   const query
// }