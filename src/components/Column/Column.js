import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import {listData, settings} from '../../data/dataStore';
import Card from '../Card/Card.js';

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

  render(){
    console.log('column:', this.props.cards );
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
      </main>
    );
  }
}

export default Column;
