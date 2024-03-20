import React from 'react';
import { graphql } from 'gatsby';

const PortfolioPage = ({ data }) => {
  const projects = data.allMarkdownRemark.edges;

  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map(({ node }) => (
        <div key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>{node.frontmatter.description}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

export default PortfolioPage;