import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPost = (props) => {

    const image = getImage(props.data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={props.data.mdx.frontmatter.title}>
            <p>Posted: {props.data.mdx.frontmatter.date}</p>
            <GatsbyImage image={image} alt={props.data.mdx.frontmatter.hero_image_alt}/>
            <p>
                Photo Credit:{" "}
                <a href={props.data.mdx.frontmatter.hero_image_credit_link}>
                    {props.data.mdx.frontmatter.hero_image_credit_text}
                </a>
            </p>
            <MDXRenderer>
                {props.data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        date(formatString: "D MMMM, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
  
`

export default BlogPost