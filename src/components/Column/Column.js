/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import {listData, settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
    state = {
      cards: this.props.cards || [],
    }

  static defaultProps = {
    icon: listData.columns.icon,
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          }
        ]
      }
    ));
  }

  render(){
    return(
      <main className={styles.component}>
        <h3 className={styles.title}>
          {this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        <div>
          {this.state.cards.map(({title}) => (
            <Card cards={title} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </main>
    );
  }
}

export default Column;
