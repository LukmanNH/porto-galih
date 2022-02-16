import { graphql } from "graphql";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const get5FirstPost = async () => {
  const query = gql`
    query MyQuery {
      blogPostsConnection(first: 5, orderBy: createdAt_DESC) {
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

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      blogPostsConnection(orderBy: createdAt_DESC) {
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

export const getPostsOrderASC = async () => {
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

export const getBlogCategories = async () => {
  const query = gql`
    query GetCategories {
      blogCategories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.blogCategories;
};

export const getPartOfProjects = async () => {
  const query = gql`
    query getAllProject {
      projectPostsConnection(first: 2) {
        edges {
          node {
            title
            slug
            isPremium
            platform
            thumbnail {
              url
            }
            projectCategories {
              name
            }
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.projectPostsConnection.edges;
};

export const getAllProjects = async () => {
  const query = gql`
    query getAllProject {
      projectPostsConnection {
        edges {
          node {
            title
            slug
            isPremium
            platform
            thumbnail {
              url
            }
            projectCategories {
              name
            }
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.projectPostsConnection.edges;
};

export const getSlugOfProjects = async () => {
  const query = gql`
    query getAllProject {
      projectPostsConnection() {
        edges {
          node {
            title
            slug
            isPremium
            platform
            thumbnail {
              url
            }
            projectCategories {
              name
            }
            excerpt
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.projectPostsConnection.edges;
};

export const getDetailProject = async (slug) => {
  const query = gql`
    query getDetailProject($slug: String!) {
      projectPost(where: { slug: $slug }) {
        title
        role
        period
        slug
        company
        goals
        isPremium
        featuredImage {
          url
        }
        projectCategories {
          name
        }
        content {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.projectPost;
};

export const getProjectCategories = async () => {
  const query = gql`
    query getProjectCategories {
      projectCategories {
        name
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  console.log(result);
  return result.projectCategories;
};
