import React, { Component } from 'react'
import { MyContext } from './MyContext';

export default class AppProvider extends Component {

    render() {
        return (
            <MyContext.Provider value={"Vẫn cứ là oke"}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
