import React from "react"
// import Img from "gatsby-image/withIEPolyfill"
// import { useStaticQuery, graphql } from "gatsby"
// import Backend from "../../assets/videos/backend-logo"

const Services = () => {
  return (
    <div className="services-banner" id="services">
      <div className="container">
        <div className="inner-services">
          <div className="services-content">
            <h2>My Services</h2>
            <div className="my-services">
              <div className="services">
                <h3>Frontend Development</h3>
                <p>
                  I can be responsible visuals that help users interact with the
                  backend features by building interfaces using Javascript,
                  HTML, and CSS. The frameworks I'm most experienced in building
                  is with React.js and the frameworks that can work with React
                  as well, such as Vue, Next, and of course, Gatsby! I've also
                  utilized other tools such as testing and debugging features
                  using test-driven development, and utilize third-party
                  libraries that are important to the visual appeal of the site
                  in order to maintain and develop responsive visuals for
                  desktop and mobile devices.
                </p>
              </div>
              <div className="services">
                <h3>Backend Development</h3>
                {/* <video controls>
                  <source src={Backend} type="video/mp4" />
                </video> */}
                <p>
                  I can also implement and maintain the databases, servers, and
                  other applications such as APIs that help power the software.
                  I've built databases with a variety of SQL and NoSQL. As well
                  as integrating other databases using AWS and Firebase to store
                  media data. I've also utilize jQuery and GraphQL in order for
                  the applications to communicate with not only with each other,
                  but through third-party sites as well. I've managed to
                  maintain these such features using OOP langauges such as
                  Javascript with Node + Express, Ruby on Rails, and Django.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
