// Layout.js

import React from 'react';
import Sidebar from './Sidebar';
import Form from './Form';
import styles from '../../styles/Layout.module.css';

const Layout = () => {
  return (
    // Overall layout container
    <div className={styles.container}>
      {/* Sidebar component for navigation */}
      <Sidebar />

      {/* Form component for user interaction */}
      <Form />
    </div>
  );
};

export default Layout;
