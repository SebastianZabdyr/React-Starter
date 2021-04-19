import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
  render(){
    console.log('card:', this.props.cards );

    return (
      <div className={styles.component}>
        {this.props.cards}
      </div>
    );
  }
}

export default Card;
