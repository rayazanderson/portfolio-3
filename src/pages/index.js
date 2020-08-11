import React from "react"
import "../styles/styles.scss"
import Header from "../components/Global/header"
import Banner from "../components/Global/banner"
import About from "../components/Global/about"
import Services from "../components/Global/services"
import Portfolio from "../components/Global/portfolio"
import Contact from "../components/Global/Contact"
import Footer from "../components/Global/footer"

export default function Index() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
