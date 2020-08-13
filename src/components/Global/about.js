import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      bb: file(relativePath: { eq: "baobei.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-banner" id="about">
      <div className="container">
        <div className="inner-about">
          <div className="content">
            <h3>WHO I AM</h3>
            <p>
              Hello! My name is Raya Anderson and I am a software engineer with
              a strong passion for learning, creativity, and the desire to
              achieve greater personal programming acumen. I graduated from a
              coding boot camp and am attaining ever-increasing technical
              capability acquired through studying, collaborative efforts with
              colleagues, peers, and friends at game jams, and hackathons. I
              enjoy learning and my curiosity led me to attend a coding
              bootcamp, coding meet-ups, and I won a Hackathon. I learned new
              skills like Three.js, Vue, and Gatsby! Along with learning cool,
              new stuff, I've sharpened existing skills. Given my skill-set and
              passion for software engineering I believe I will be a benefit to
              a team that values quality, innovation, and creativity.
            </p>
          </div>
          <div className="about-image">
            <div className="top-right">
              <Img fluid={data.bb.childImageSharp.fluid} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="lined-box"></div>
      <div className="black-box"></div>
      <div className="box-box overlay"></div>
    </div>
  )
}

export default About
