import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Storytelling is a craft.</h1>
        <p>The quality of it will define how well you communicate the most important & powerful stories and ideas.</p>
        <Link to="/"><img src={require('../images/writing.png')} width="300"/></Link>
        {/* <Link to="/page-2/">About</Link> */}
      </div>
    </div> 
  </div>
)

export default IndexPage