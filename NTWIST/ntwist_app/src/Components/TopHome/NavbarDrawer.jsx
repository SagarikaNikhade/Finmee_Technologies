import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import styles from './styles.module.css';

const NavbarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.mobile_navbar}>
      <button className={styles.menu_button} onClick={handleOpen}>
        <HiMenu />
      </button>

      {isOpen && (
        <div className={styles.drawer}>
          <div className={styles.drawer_overlay} onClick={handleClose}></div>
          <div className={styles.drawer_content}>
            <button className={styles.close_button} onClick={handleClose}>
              Close
            </button>
            <div className={styles.drawer_links}>
              <a href="#">Home</a>
              <a href="#">About me</a>
              <a href="#">Skills</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarDrawer;