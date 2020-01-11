import React, { Component } from 'react'
import AppProvider from './AppProvider';
import Lv1 from './Lv1';



export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Lv1></Lv1>
      </AppProvider>

      
    )
  }
}
