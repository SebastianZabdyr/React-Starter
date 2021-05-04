/* eslint-disable no-unused-vars */
/*eslint-disable react/prop-types*/
import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import {listData, settings, lists , columns , cards} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {Link} from 'react-router-dom';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  }


  render(){

    const {title, icon, cards, addCard} = this.props;
    return(
      <Container>
        <section>
          <Hero titleText={'Search Results'} image={'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'} />
          {
            <div className={styles.cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          }
        </section>
      </Container>
    );
  }
}

export default SearchResults;
