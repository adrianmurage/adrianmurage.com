import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    <StaticImage alt="react" src="../images/react.webp"></StaticImage>
    </Layout>
  )
}

export default IndexPage