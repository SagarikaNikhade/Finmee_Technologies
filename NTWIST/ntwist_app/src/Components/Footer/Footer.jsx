import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="Logo" />
      {/* <br/> */}
      <div className={styles.line}>
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
      </div>
      <p className={styles.add}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      <div className={styles.icon}>
      <img src="https://pngimg.com/uploads/twitter/twitter_PNG15.png" alt="twitter" />
      <img src="https://e7.pngegg.com/pngimages/40/781/png-clipart-computer-icons-linkedin-logo-others-angle-text.png" alt="linkdin" />
      </div>
      <p  className={styles.add}>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  )
}

export default Footer
