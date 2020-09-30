import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => (
  <section className={styles.component}>
    <p>{props.title}</p>
  </section>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
