import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  return (
    <section>
      <Layout pageTitle="Blog">
        {data.allMdx.nodes.map((node) => (
          <section>
            <GatsbyImage
              image={
                node.frontmatter.hero_image.childImageSharp.gatsbyImageData
              }
              alt={node.frontmatter.hero_image_alt}
            />
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
              </h2>
              <p> Podsted: {node.frontmatter.date}</p>
            </article>
          </section>
        ))}
      </Layout>
    </section>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "D MMMM, YYYY")
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`;
export default BlogPage;
