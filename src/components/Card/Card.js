import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
  render(){
    return (
      <div className={styles.component}>
        {this.props.cards}
      </div>
    );
  }
}

export default Card;
