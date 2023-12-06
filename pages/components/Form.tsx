// Form.js

import React, { useState } from 'react';
import styles from '../../styles/Form.module.css';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate email, username, and password
    const isEmailValid = validateEmail(email);
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    // Display error messages if any
    setEmailError(isEmailValid ? '' : 'Invalid Email');
    setUsernameError(isUsernameValid ? '' : 'Username must be alphanumeric & dont use (spaces, special characters)');
    setPasswordError(isPasswordValid ? '' : 'Password must have 1 capital letter, 1 special character, and 1 number');

    // If all validations pass, log the form data
    if (isEmailValid && isUsernameValid && isPasswordValid) {
      console.log('Form Submitted:', { username, email, password });
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Ensure email contains @ and .

    // Extract and return domain part if email is valid
    if (regex.test(email)) {
      const domainPart = email.split('@')[1];
      return domainPart;
    } else {
      return false; // Indicate invalid email
    }
  };



  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]+$/; // Ensure username is alphanumeric

    // Check for minimum username length
    const minUsernameLength = 6;
    if (username.length < minUsernameLength) {
      return false;
    }

    // Check for prohibited characters (e.g., spaces, special characters)
    const prohibitedCharacters = [' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '{', '}', '[', ']'];
    for (const character of prohibitedCharacters) {
      if (username.includes(character)) {
        return false;
      }
    }

    // If all checks pass, username is valid
    return regex.test(username);
  };


  const validatePassword = (password) => {
    // Password must have 1 capital letter, 1 special character, and 1 number
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).*$/;
    return regex.test(password);
  };

  return (
    <aside className={styles['form-container']}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h1>Login Form</h1>
        <label className={styles['form-label']}>Username:</label>
        <input
          className={styles['form-input']}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {usernameError && <p className={styles.error}>{usernameError}</p>}

        <label className={styles['form-label']}>Email:</label>
        <input
          className={styles['form-input']}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {emailError && <p className={styles.error}>{emailError}</p>}

        <label className={styles['form-label']}>Password:</label>
        <input
          className={styles['form-input']}
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordError && <p className={styles.error}>{passwordError}</p>}

        <button className={styles['form-button']} type="submit">
          Submit
        </button>
      </form>
    </aside>
  );
};

export default Form;
