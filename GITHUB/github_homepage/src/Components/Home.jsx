import React from 'react'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home1}>
        <div className={styles.rounded_div}><p>GitHub Universe: Dive in to AI, security, and DevEx<br />
          Get your tickets now to join us on Nov. 8-9.</p></div>
        <h1 className={styles.rounded_div_h1}>Let’s build from here</h1>
        <h3 className={styles.rounded_div_h3}>GitHub Universe: Dive in to AI, security, and DevEx
          Get your tickets now to join us on Nov. 8-9.
          Let’s build from here
          The AI-powered developer platform to build, scale, and deliver secure software.</h3>
        <div className={styles.container}>
          <div className={styles.left}>
            <input placeholder='Email address' />
            <button>Sign Up for Github</button>
          </div>
          <div className={styles.right}>
            Start a free enterprise trial
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className={styles.images}>
        <p>Trusted by the world’s leading organizations ↘︎</p>
        <div className={styles.image_container}>
          <img src="https://github.githubassets.com/assets/stripe-e33f3c583b14.svg"alt=""/>
          <img src="https://github.githubassets.com/assets/pinterest-20e7451b691f.svg"alt=""/>
          <img src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"alt=""/>
          <img src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"alt=""/>
          <img src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"alt=""/>
          <img src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"alt=""/>
        </div>
      </div>
      <br/>
      <br/>
      <div className={styles.card}>
        <h2>Productivity</h2>
          <h3><span className={styles.green_text}>Accelerate high-quality software<br/>development</span>. Our AI-powered platform<br/> drives innovation with tools that boost<br/> developer velocity.</h3>
      </div>
      <br/>
      <br/>
      <div className={styles.card}>
        <h2>Collaboration</h2>
        <h3><span className={styles.red_text}>Supercharge collaboration.</span> We provide<br/> unlimited repositories, best-in-class version<br/> control, and the world’s most powerful open<br/> source community—so your team can work more efficiently together.</h3>
      </div>
      <br/>
      <div  class={styles.table_container}>
        <img src="https://github.githubassets.com/assets/issues-plan-3282274c574b.png?width=2500&format=webpll" alt="img"/>
      </div>
      <br/>
      <div className={styles.card}>
        <h3><span className={styles.white_text}>GitHub Issues and GitHub Projects</span> supply<br/>flexible project management tools that<br/> adapt to your team alongside your code.</h3>
        <h2>Explore GitHub Issues </h2>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
      <div className={styles.Top_of_footer1}>
        <h2>The place for anyone from anywhere <br/>to build anything</h2>
        <p>Whether you’re scaling your startup or just learning how to code, GitHub is<br/> your home. Join the world’s largest developer platform to build the <br/>innovations that empower humanity. Let’s build from here.</p>
      </div>
      <div className={styles.Top_of_footer2}>
      <button>Sign Up for Github</button>
      <button>Start a free enterprise trial</button>
      </div>
    </div>
    <br/>
    <div className={styles.fullscreenImageContainer}>
    <img src="https://github.blog/wp-content/uploads/2021/02/card.png?resize=800%2C425" alt="last-img"/>
    </div>
    </div>
  )
}

export default Home
