import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { articleCardImage} from "./blog.module.css"

const BlogPage = ({ data }) => {
  return (
    <section>
      <Layout pageTitle="Blog">
        {data.allMdx.nodes.map((node) => (
          <section>
            <article key={node.id}>
              <div>
                <Link to={`/blog/${node.slug}`}>
                  <GatsbyImage className={articleCardImage}
                    image={
                      node.frontmatter.hero_image.childImageSharp
                        .gatsbyImageData
                    }
                    alt={node.frontmatter.hero_image_alt}
                  />
                  <h2>{node.frontmatter.title}</h2>
                </Link>
              </div>
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
              gatsbyImageData(
                width: 400
              )
            }
          }
        }
        slug
      }
    }
  }
`;
export default BlogPage;
