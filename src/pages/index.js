import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

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
    <div className ="Cards">
    <h2>Written to empower the future.</h2>
    <p>From digital content to data storytelling, we got you!</p>
    </div>
    <div className = "CardGroup">
      <Card 
      title = "Exclusive Industry Writing"
      text = "Technology pieces; Arts & Style articles (Vogue-style), guest writing, interviews, reviews; Business articles."
      />
      <Card 
      title = "Articles, 1-pagers, Blogs, Style Guides "
      text = "Captivating content for your audience, SEO optimized. We take a human-centered approach in writing pieces."
      />
      <Card 
      title = "UX & Creative Writing"
      text = "Digital interfaces with well-written copy will delight your users and guide them through your product."
      />
      <Card 
      title = "Speech Writing"
      text = "Behind every grest leader is a great speechwriter. We help you to hone the tone through well-prepared messages."
      />
      <Card 
      title = "Ghostwriting"
      text = "Non-fiction, memoirs, autobiography, self-help books & how-to guides. Our pieces will align to your vision, personality, and voice style."
      />
      <Card 
      title = "Editing"
      text = "Don’t let typos lose trust in your readers. We offer high quality copyediting, line editing, developmental editing, book proofreading."
      />
      <Card 
      title = "Data Journalism"
      text = "Tell a story with data. We build powerful data visualizations to help explain complex ideas and write data-driven stories."
      />
      <Card 
      title = "Investor decks"
      text = "If you are a CEO of a startup and have limited resources for a design team to craft an investor deck, just let us know and we will deliver it in 24 hours."
      />
      <Card 
      title = "Career Crafting"
      text = "Resume design & writing, cover letters writing. Give us all the information needed nelow and we will deliver it in 24 hours."
      />
    </div>
  </div>
)

export default IndexPage