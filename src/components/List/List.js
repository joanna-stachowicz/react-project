import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Container from '../Container/Container';


class List extends React.Component {

  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, imageAlt, description, columns, addColumn} = this.props;
    return (
      <section className={styles.component}>
        <Container>
          <Hero titleText={title} imgSrc={image} altSrc={imageAlt} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn} />
          </div>
        </Container>
      </section>
    );
  }
}

export default List;
