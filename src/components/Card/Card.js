/*eslint-disable react/prop-types*/
import React from 'react';
import styles from './Card.scss';

class Card extends React.Component {
  render(){
    const {title} = this.props;

    return (
      <div className={styles.component}>
        {title}
      </div>
    );
  }
}

export default Card;
