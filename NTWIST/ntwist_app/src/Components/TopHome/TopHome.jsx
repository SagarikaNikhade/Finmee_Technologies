import React from 'react';
import Navbar from "./Navbar";
import styles from "./TopHome.module.css";

const TopHome = () => {
  const backgroundImageStyle = {
    backgroundImage: 'url("https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg")',
    backgroundSize: 'cover', // Adjust this as needed
  };

  return (
    <div style={backgroundImageStyle}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.box}>
          <h1>Data-powered solutions<br/>for Industrial Excellance</h1>
          <br/>
          <button>Read More</button>
        </div>
        <div className={styles.box}>
          <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt='chart'/>
        </div>
      </div>
    </div>
  );
};

export default TopHome;

