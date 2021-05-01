import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './FAQ.scss';
import {faqData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <h2>FAQFAQ</h2>
    <p>Lore FAAAAAAAAAAAAAAAQQQQQQQQQQQQQQQQQQ m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <Hero  className={styles.image} titleText={faqData.titleText} image={faqData.image} />
  </Container>
);

export default FAQ;
