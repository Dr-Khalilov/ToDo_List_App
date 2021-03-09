import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headingBtnStyles}>
        <div className={styles.btnStyles}>
          <img src='/icons/format-list-bulleted.svg' alt='button' />
        </div>
        <div>
          <h1>Website todo</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
