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


// import React from 'react';
// import { HiMenu } from 'react-icons/hi';
// import styles from './styles.module.css';

// const NavbarDrawer = ({ isOpen, toggleDrawer }) => {
//   const mobileNavbarClass = `${styles.mobile_navbar} ${isOpen ? styles.active : ''}`;
//   const menuButtonClass = styles.menu_button;
//   const drawerClass = styles.drawer;
//   const overlayClass = styles['drawer-overlay'];
//   const contentClass = styles['drawer-content'];
//   const closeButtonClass = styles['close-button'];
//   const linksClass = styles['drawer-links'];

//   return (
//     <div className={mobileNavbarClass}>
//       <button className={menuButtonClass} onClick={toggleDrawer}>
//         <HiMenu />
//       </button>
//       <div className={drawerClass}>
//         <div className={overlayClass} onClick={toggleDrawer}></div>
//         <div className={contentClass}>
//           <button className={closeButtonClass} onClick={toggleDrawer}>
//             Close
//           </button>
//           <div className={linksClass}>
//             <a href="/">Home</a>
//             <a href="/">Industries</a>
//             <a href="/">AI Software</a>
//             <a href="/">Blog</a>
//             <a href="/">Contact Us</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavbarDrawer;
