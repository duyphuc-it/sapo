import React, { Component } from 'react'

export default class PaginationItem extends Component {
    handleActive = ()=> {
        if(this.props.page === this.props.currPage && this.props.currPage >= 0) {
            return true;
        }
        return false;
    }

    setClass = () => {
        let className = 'page-item';
        if(this.handleActive()) {
            className += " active"
        }
        if(this.props.currPage < 0 ) {
            className += " disabled"
        }
        return className;
    }

    render() {
        return (
            <li className={this.setClass()}>
                <button className="page-link" onClick={() =>this.props.getDataApi(this.props.currPage)}>{this.props.children}</button>
            </li>
        )
    }
}
