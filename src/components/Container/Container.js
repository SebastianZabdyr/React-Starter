/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Container = props => (
  <div className={styles.component}>
    {props.children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
