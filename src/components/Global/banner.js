import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      leaf: file(relativePath: { eq: "leaf.png" }) {
        childImageSharp {
          fluid(maxWidth: 5000, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text"> Raya Anderson </div>
          <div className="layer-1"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="banner-image">
            <Img
              fluid={data.leaf.childImageSharp.fluid}
              alt=""
              objectFit="cover"
              objectPosition="50% 50%"
              alt=""
            />
          </div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
          <div className="rain-drop"></div>
        </div>
      </div>
      <div className="fixed-scroll">Scroll down</div>
    </div>
  )
}

export default Banner
