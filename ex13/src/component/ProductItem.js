import React, { Component } from 'react'
import ProductDetail from './ProductDetail';

export default class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        }
    }

    showDetail = () => {
        if (this.state.showDetail) {
            return <ProductDetail product={this.props.product} back={this.handleDetail}></ProductDetail>
        }
    }
    
    handleDetail = () => {
        this.setState(prevState => ({
            showDetail: !prevState.showDetail
        }))
    }

    render() {
        return (
            <div className="category-item">
                <div className="name-action">
                    <h2 className="category-name">{this.props.product.name}</h2>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-info" onClick={this.handleDetail}>Chi tiết</button>
                        <button type="button" className="btn btn-warning" onClick={() => this.props.handleEditProduct(this.props.product)}><i className="far fa-edit" /></button>
                    </div>
                </div>
                {this.showDetail()}
            </div>
        )
    }
}
