import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="https://png.pngtree.com/png-vector/20220711/ourmid/pngtree-automotive-car-logo-png-image_5837187.png" alt="Logo" className={styles.logo} />
      </Link>
      <nav className={styles['local-nav']}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;

