import React, { Component } from 'react'
import { MyContext } from './MyContext'

import Lv2 from './Lv2';
export default class Lv1 extends Component {
    render() {
        return (
            <div>
                <h1>{this.context}</h1>
                <Lv2></Lv2>
            </div>
        )
    }
}


Lv1.contextType = MyContext