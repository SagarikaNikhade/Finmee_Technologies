import React, { useState } from 'react';
import styles from './navbar.module.css';
import NavbarDrawer from './NavbarDrawer';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <h1 className={styles.navbar_logo}>
          <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="Logo" />
        </h1>
        <ul className={`${styles['nav-menu']} ${isDrawerOpen ? styles.active : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Industries</a>
          </li>
          <li>
            <a href="/">AI Software</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <div className={styles.menu_icon} onClick={toggleDrawer}>
          <i className={`fas ${isDrawerOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
      {/* <NavbarDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} /> */}
    </nav>
  );
};

export default Navbar;