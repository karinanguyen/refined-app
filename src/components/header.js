import React, { useRef } from 'react'
import Link from 'gatsby-link'
import './Header.css'

// const Header = ({ siteTitle }) => (
//   <div className = "Header">
//     <div className = "HeaderGroup">
//     <Link to="/"><img src={require('../images/logo.png')} width="50"/></Link>
//       <Link to="/services">Services</Link>
//       <Link to="/worked-with">Worked With</Link>
//       <Link to="/about-refined">About Refined</Link>
//       <Link to="/contact"><button>Contact</button></Link>
//     </div>
//   </div>
// )

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    return(
      <div className = {this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className = "HeaderGroup">
        <Link to="/"><img src={require('../images/logo.png')} width="50"/></Link>
        <a href="#1">Services</a>
        <Link to="#2">Worked With</Link>
        <Link to="#3">About Refined</Link>
        <a href = "mailto: karina@refinedwritinglab.com?subject = Project request&body=Tell us how we can help you."><button>Contact</button></a>
      </div>
    </div>
    )
  }
}
export default Header
