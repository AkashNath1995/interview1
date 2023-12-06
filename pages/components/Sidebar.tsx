// Your Sidebar component
import React, { useState } from 'react';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebar} ${showSidebar && styles.showSidebar}`}>
        <div className={styles.toggleButton} onClick={toggleSidebar}>
          &#10005; {/* Cross symbol */}
        </div>
        <nav className={styles['local-nav']}>
          <a href="/dashboard">Dashboard</a>
          <a href="/settings">Settings</a>
        </nav>
        <div className={styles['form-container']}>
          <div className={styles.searchForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </div>
        </div>
      </aside>
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        &#9776; {/* Hamburger symbol */}
      </div>
    </div>
  );
};

export default Sidebar;
