import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import {
  profileHeading,
  profileImage,
  profileSection,
  hackernoonStyle,
} from "./index.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <section className={profileSection}>
        <div>
          <h1 className={profileHeading}>Hi there, I'm Adrian Murage 👋🏽</h1>
          <p>
            I love building things. The rush I get from it is almost
            unparalleled.
          </p>
          <p>
            I am currently interning at{" "}
            <a href="https://hackernoon.com">
              <StaticImage
                className={hackernoonStyle}
                alt="HackerNoon"
                src="../images/hn-logo.png"
              ></StaticImage>
            </a>
            . Where I help produce the{" "}
            <a href="https://podcast.hackernoon.com/">HackerNoon Podcast.</a>
          </p>
          <p>
            On the side, I am retraining as a Frontend Developer primarily
            working with React JS.
          </p>
          <p>
            Welcome to my digital garden where I share what I'm learning,
            showcase my projects 🚀, and document becoming a better developer
            and growing a career in tech 💻
          </p>
        </div>
        <div>
          <StaticImage
            className={profileImage}
            alt="react"
            src="../images/adrian.jpg"
          ></StaticImage>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
