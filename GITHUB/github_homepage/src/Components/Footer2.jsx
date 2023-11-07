import React from 'react'
import styles from "./Footer.module.css"

const Footer2 = () => {
  return (
      <div className={styles.footer_last_card}>
        <div className={styles.footer_last_card1}>
          <p>© 2023 GitHub, Inc.</p>
          <p>Terms</p>
          <p>Privacy (Updated 08/2022)</p>
          <p>Sitemap</p>
          <p>What is Git?</p>
        </div>
        <div className={styles.footer_last_card2}>
        <img src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="GitHub" />
        <img src="https://github.githubassets.com/assets/facebook-de85282d23e6.svg" alt="Facebook" />
        <img src="https://github.githubassets.com/assets/linkedin-3c0ace8edb5f.svg" alt="LinkedIn" />
        <img src="https://github.githubassets.com/assets/youtube-25bc21e924c8.svg" alt="YouTube" />
        <img src="https://github.githubassets.com/assets/x-023c3ca5e173.svg" alt="Twitch" />
        <img src="https://github.githubassets.com/assets/tiktok-5d12d948d920.svg" alt="TikTok" />
        </div>
      </div>
  )
}

export default Footer2
