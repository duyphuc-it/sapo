import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        let product = this.props.product;
        return (
            <div className="detail">
                <h5>Name: {product.name}</h5>
                <h5>Link image: {product.linkImage}</h5>
                <h5>Price: {product.price}</h5>
                <h5>Amount: {product.amount}</h5>
                <h5>Unit sale: {product.unitSale}</h5>
                <h5>Description: {product.description}</h5>
                <h5>Category id: {product.categoryId}</h5>
            </div>
        )
    }
}
