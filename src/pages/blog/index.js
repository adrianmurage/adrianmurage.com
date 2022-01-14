import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPage = ({data}) =>{
    return(
        <Layout pageTitle="Blog">
            <ul>
            {
            data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <h2>{node.frontmatter.title}</h2> 
                <p> Podsted: {node.frontmatter.date}</p>
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
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
        body
      }
    }
  }
`
export default BlogPage