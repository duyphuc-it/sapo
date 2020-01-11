import React, { Component } from 'react'
import { MyContext } from './MyContext'

import Lv3 from './Lv3';

export default class Lv2 extends Component {
    render() {
        return (
            <div>
                <h1>{this.context}</h1>
                <Lv3></Lv3>
            </div>
        )
    }
}

Lv2.contextType = MyContext
