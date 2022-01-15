import React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";

const BlogPage = ({data}) =>{
    return(
        <Layout pageTitle="Blog">
            <ul>
            {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                  {node.frontmatter.title}
                  </Link>
                  </h2> 
                <p> Podsted: {node.frontmatter.date}</p>

              </article>
            ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "D MMMM, YYYY")
        }
        id
        slug
      }
    }
  }
`
export default BlogPage