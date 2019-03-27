import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import classes from './index.module.css';

export default class Tim extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    return (
      <div className={classes.Tim}>
        <div className={classes.ChatLeft}>
          <div className={classes.TopBar}></div>
          <div className={classes.Sessions}></div>
        </div>
        <div className={classes.ChatRight}>
          <div className={classes.Title}></div>
          <div className={classes.Content}></div> 
          <div className={classes.TextEditor}></div>
        </div>
      </div>
    )
  }
}
