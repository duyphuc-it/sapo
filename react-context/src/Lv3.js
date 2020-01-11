import React, { Component } from 'react'
import { MyContext } from './MyContext'

export default class Lv3 extends Component {
    render() {
        return (
            <div>
                {this.context}
            </div>
        )
    }
}

Lv3.contextType = MyContext