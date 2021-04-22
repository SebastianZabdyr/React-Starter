/* eslint-disable no-unused-vars */
/*eslint-disable react/prop-types*/
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import {listData, settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  static defaultProps = {
    icon: listData.columns.icon,
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
  }

  render(){
    const {title, icon, cards} = this.props;
    return(
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
    );
  }
}

export default Column;
