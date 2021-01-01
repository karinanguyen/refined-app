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
    <div className ="Cards" id="1">
    <h2>Written to empower the future.</h2>
    <p>from digital content to data storytelling - Refined can craft it all 🖤</p>
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
      text = "One of the key challenges in recruitment is inability to tell a much more holistic and contextualized story of oneself. We offer personalized resume design & cover letters writing."
      />
    </div>
    <div className="LogoGroup" width = "1000"> 
      {/* <div className="Logo1"> 
      <Link to="/"><img src={require('../images/logos1.png')}/></Link>
      </div> */}
      <div className="Logo2" id="2"> 
      <Link to="/"><img src={require('../images/logos2.png')}/></Link>
      </div> 
    </div>

    <div className = "About" id="3"> 
    <h1> About Refined.</h1>
    <p> Refined is a digital writing studio of elegant craftsmanship. With years of work experience our writing studio brings brilliant storytelling within fine digital content, UX writing, data storytelling, and more.  
    As the experience economy becomes increasingly introspective, Refined offers unique yet innovative ways to connect audiences & communities with various states of minds. 
    We bring content to a new level - the one that understands future cultural rebooting microtrends, immersive living with big data, consumer netocracies, subconcious commerce, and algorithmic beauty.  
    You can think of us as a Michelin Star restaurant full of letter chefs and refined words served on silver plates. </p>
    <a href = "mailto: karina@refinedwritinglab.com?subject = Project request&body=Tell us how we can help you."><button>Contact</button></a>
    <footer>&copy; Copyright 2020 Refined</footer>
    </div>

  </div>
)

export default IndexPage