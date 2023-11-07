import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_section1}>
        <h1>GitHub</h1>
        <h3>Subscribe to The GitHub Insider
         <span style={{color: '#456379'}}> Discover tips, technical guides, and best practices in our monthly<br/> newsletter for developers.</span></h3>
         <button className={styles.footer_btn}>Subscribe</button>
      </div>
      <br/>
      <div className={styles.footer_section2}>
      <div>
        <p>Product</p>
        <p>Features</p>
        <p>Enterprise</p>
        <p>Copilot</p>
        <p>Security</p>
        <p>Pricing</p>
        <p>Team</p>
        <p>Resources</p>
        <p>Roadmap</p>
        <p>Compare GitHub</p>
      </div>
      <div>
        <p>Platform</p>
        <p>Developer API</p>
        <p>Partners</p>
        <p>Electron</p>
        <p>GitHub Desktop</p>
      </div>
      <div>
        <p>Support</p>
        <p>Docs</p>
        <p>Community Forum</p>
        <p>Professional Services</p>
        <p>Premium Support</p>
        <p>Skills</p>
        <p>Status</p>
        <p>Contact GitHub</p>
      </div>
      <div>
        <p>Company</p>
        <p>About</p>
        <p>Customer stories</p>
        <p>Blog</p>
        <p>The ReadME Project</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Inclusion</p>
        <p>Social Impact</p>
        <p>Shop</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
