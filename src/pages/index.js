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
          <h2>Exploring being mediocre.</h2>
          <p>
            I'm at the start of my career, hungry to learn and putting in the
            work that's needed to know more about what I find interesting.
          </p>
          <p>
            So far, that has been software development in a business context
            where the primary goal is creating value and solving problems with
            software.
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
            <a href="https://podcast.hackernoon.com/">HackerNoon Podcast</a> and
            learn about content and distribution.
          </p>
          <p>
            On the side, I am learning Frontend Development primarily working
            with React JS.
          </p>
          <p>
            On this website you'll find:
            <ol>
              <li>My portfolio</li>
              <li>My blogposts (ideas, tutorials, documentation)</li>
            </ol>
          </p>
          <p>
            Feel free to poke around and{" "}
            <a href="mailto:adrianmurage21@gmail.com">reach out to me</a> if you
            find something you would like to explore futher with me. Cheers 🥂
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
