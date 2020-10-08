import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.FAQ.title} imgSrc={settings.FAQ.image} altSrc={settings.FAQ.imageAlt} />
    <h2>{settings.FAQ.header}</h2>
    <ol>
      {settings.FAQ.content.map(contentData => (
        <li key={contentData.key}><h3>{contentData.question}</h3><p>{contentData.answer}</p></li>
      ))}
    </ol>
  </Container>
);

export default FAQ;