// Sidebar.js

import React, { useState } from 'react';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
  // State to manage the visibility of the sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // Function to toggle the visibility of the sidebar
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    // Container for the entire sidebar component
    <div className={styles.container}>
      {/* Sidebar with dynamic class for visibility */}
      <aside className={`${styles.sidebar} ${showSidebar && styles.showSidebar}`}>
        {/* Toggle button to close the sidebar */}
        <div className={styles.toggleButton} onClick={toggleSidebar}>
          &#10005; {/* Cross symbol */}
        </div>

        {/* Navigation links within the sidebar */}
        <nav className={styles['local-nav']}>
          <a href="/dashboard">Dashboard</a>
          <a href="/settings">Settings</a>
        </nav>

        {/* Container for additional components within the sidebar */}
        <div className={styles['form-container']}>
          <div className={styles.searchForm}>
            {/* Search input and button */}
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </div>
        </div>
      </aside>

      {/* Toggle button for opening the sidebar */}
      <div className={styles.toggleButton} onClick={toggleSidebar}>
        &#9776; {/* Hamburger symbol */}
      </div>
    </div>
  );
};

export default Sidebar;
