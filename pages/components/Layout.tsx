// components/Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import Form from './Form';
import styles from '../../styles/Layout.module.css'; 

const Layout = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Form />
    </div>
  );
};

export default Layout;
