import React from 'react'
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <div className={styles.attribution}>
      Challenge by {''}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer'
      >
        Frontend Mentor {''}
      </a>
      Coded by {''}
      <a href='#'>Jordan Kimsey</a>
    </div>
  );
}

export default Footer