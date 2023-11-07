import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_logo}>
        <a href="/">
          <img
            src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
            alt="GitHub Logo"
          />
        </a>
        <a href="/">Product</a>
        <a href="/">Solutions</a>
        <a href="/">Open Source</a>
        <a href="/">Pricing</a>
      </div>
      <div className={styles.nav_search}>
        <input type="text" placeholder="Search or jump to..." />
        {/* <img
          src="https://www.svgrepo.com/show/7109/search.svg"
          alt="Search Icon"
          className={styles.search_icon}
        /> */}
      </div>
      <div className={styles.nav_user}>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
      </div>
    </nav>
  );
}

export default Navbar;
