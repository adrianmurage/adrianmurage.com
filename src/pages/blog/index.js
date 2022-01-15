import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <section>
      <Layout pageTitle="Blog">
        {data.allMdx.nodes.map((node) => (
          <section>
            <GatsbyImage
              image={
                data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData
              }
              alt={data.mdx.frontmatter.hero_image_alt}
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
  query ($id: String) {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "D MMMM, YYYY")
        }
        slug
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default BlogPage;
