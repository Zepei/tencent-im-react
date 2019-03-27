import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";
import classes from "./index.module.css";
import * as everythign from "../public/sdk/tencentIMSDK/sdk/webim";
// import { height } from "window-size";

export class TimLayout extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  componentDidMount() {}

  render() {
    return (
      <div className={classes.Tim}>
        <div className={classes.ChatLeft}>
          <div className={classes.TopBar} />
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
    componentDidMount() {
      const script = document.createElement("script");
      window.webim = 
      console.log(everythign);

      // script.src = "../node_modules/tencent-im-react/public/sdk/tencentIMSDK/sdk/webim.js";
      // script.src = "/example/node_modules/tencent-im-react/public/sdk/tencentIMSDK/sdk/webim.js";
      script.innerHTML =
        "document.write('This is output by document.write()!')";
      document.body.appendChild(script);
    }
    render() {
      return (
        <div id="in TimHOC" style={{ height: "100%" }}>
          <WrappedComponent />
        </div>
      );
    }
  }
  return TimHOC;
};
