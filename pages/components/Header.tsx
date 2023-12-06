// Header.js

import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    // Header component structure
    <header className={styles.header}>
      {/* Logo with a link to the home page */}
      <Link href="/">
        <img src="https://png.pngtree.com/png-vector/20220711/ourmid/pngtree-automotive-car-logo-png-image_5837187.png" alt="Logo" className={styles.logo} />
      </Link>

      {/* Navigation links */}
      <nav className={styles['local-nav']}>
        {/* Link to the About page */}
        <Link href="/about">About</Link>

        {/* Link to the Contact page */}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

