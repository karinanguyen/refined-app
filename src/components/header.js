import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "HeaderGroup">
    <Link to="/"><img src={require('../images/logo.png')} width="50"/></Link>
      <Link to="/services">Services</Link>
      <Link to="/worked-with">Worked With</Link>
      <Link to="/about-refined">About Refined</Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  </div>
)

export default Header
