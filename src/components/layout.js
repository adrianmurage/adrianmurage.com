import React from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Link to="/" className={siteTitle}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      </Link>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      <main>{children}</main>
      <br />
      <br />
      <footer>
        <a></a>
        <p>Made with ❤ in Nairobi.</p>
        <p>
          Powered by{" "}
          <span>
            <a href="https://www.gatsbyjs.com/">Gatsby.js,</a>
          </span>{" "}
          <span>
            <a href="https://mdxjs.com/">MDX</a>
          </span>{" "}
          and,{" "}
          <span>
            <a href="https://www.netlify.com/">Netlify.</a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
