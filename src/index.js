import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";
import classes from "./index.module.css";
// import { height } from "window-size";

export class TimLayout extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  componentDidMount() {}

  logInHandler = () => {
    
  }

  render() {
    return (
      <div className={classes.Tim}>
        <div className={classes.ChatLeft}>
          <div className={classes.TopBar}>
            <button onClick={this.logInHandler}>log in</button>
          </div>
          <div className={classes.Sessions} />
        </div>
        <div className={classes.ChatRight}>
          <div className={classes.Title} />
          <div className={classes.Content} />
          <div className={classes.TextEditor} />
        </div>
      </div>
    );
  }
}

export const timHOC = WrappedComponent => {
  class TimHOC extends Component {
    state = {
      webimLoaded: false,
    };

    componentDidMount() {
      const script = document.createElement("script");
      script.src =
        "https://youthchina-frontend.oss-us-east-1.aliyuncs.com/webim.js";
      document.head.appendChild(script);
      this.setState({ webimLoaded: true }, () => {
        console.log("webim loaded");
      });
    }
    render() {
      console.log("render");
      return (
        <div id="in TimHOC" style={{ height: "100%" }}>
          <WrappedComponent webimLoaded={this.state.webimLoaded} />
        </div>
      );
    }
  }
  return TimHOC;
};
