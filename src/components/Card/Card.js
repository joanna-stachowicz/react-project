import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = ({title}) => (
  <section className={styles.component}>
    <p>{title}</p>
  </section>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
