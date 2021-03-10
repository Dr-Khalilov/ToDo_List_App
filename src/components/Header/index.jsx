import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headingBtnStyles}>
        <a className={styles.btnStyles} href='#'>
          <img src='/icons/format-list-bulleted.svg' alt='button' />
        </a>
        <h1>Website todo</h1>
      </div>
    </header>
  );
};

export default Header;
