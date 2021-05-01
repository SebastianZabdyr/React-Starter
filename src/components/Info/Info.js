import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoData} from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2>Info</h2>
    <Hero titleText={infoData.titleText} image={infoData.image} />
    <div>{infoData.pageText}</div>
  </Container>
);

export default Info;
