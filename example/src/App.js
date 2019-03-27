import React, { Component } from 'react'

import './App.css'
import {TimLayout, timHOC} from 'tencent-im-react';

class App extends Component {
  render () {
    return (
      <div className="App">
        <TimLayout/>
        {console.log(window.webim)}
      </div>
    )
  }
}

export default timHOC(App);
