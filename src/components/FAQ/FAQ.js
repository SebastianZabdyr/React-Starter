import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './FAQ.scss';
import {faqData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <h2>FAQ</h2>
    <Hero  className={styles.image} titleText={faqData.titleText} image={faqData.image} />
    <div>{faqData.pageText}</div>
  </Container>
);

export default FAQ;
