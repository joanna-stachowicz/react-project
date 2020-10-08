import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} imgSrc={settings.info.image} altSrc={settings.info.imageAlt} />
    <h2>{settings.info.header}</h2>
    <p>{settings.info.content}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.node,
  imageAlt: PropTypes.node,
};

export default Info;