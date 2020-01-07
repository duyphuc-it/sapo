import React, { Component } from 'react'
import ProductItem from './ProductItem';
import EditProduct from './EditProduct';
import axios from 'axios';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditProduct: false,
            productEdit: '',
            listProduct: []
        }
    }

    reloadApi = () =>{
        this.getDataApi();
    }

    getDataApi = () => {
        axios.get(`http://localhost:8080/admin/product`)
            .then(res => {
                const productListData = res.data;
                const listProduct = this.getProductByCatId(productListData);
                this.setState({
                    listProduct: listProduct
                })
            })
            .catch(error => console.log(error));
    }

    getProductByCatId = (productListData) => {
        let listProduct = [];
        productListData.map((product) => {
            if (parseInt(this.props.categoryOfProduct.id) === product.categoryId) {
                return listProduct.push(product);
            }
            return null;
        });
        return listProduct;
    }

    componentDidMount() {
        this.getDataApi();
    }

    handleEditProduct = (productEdit) => {
        this.setState((prevState) => ({
            showEditProduct: !prevState.showEditProduct,
            productEdit: productEdit
        }))
    }

    renderProduct = () => {
        if (this.state.showEditProduct) {
            return (
                <EditProduct product={this.state.productEdit} handleEditProduct={this.handleEditProduct} reloadApi={this.reloadApi}></EditProduct>
            )
        } else {
            return (

                <div className="category-list">
                    <div className="category-list-titel">
                        <h1>Product of {this.props.categoryOfProduct.name}</h1>
                    </div>
                    {
                        this.state.listProduct.map((product) => (
                            <ProductItem key={product.id} product={product} handleEditProduct={this.handleEditProduct}></ProductItem>
                        ))
                    }
                    <div className="back">
                        <div className="text-center mt-5" ><button type="button" className="btn btn-success" onClick={this.props.handleCategory}>Quay lại</button></div>
                    </div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="container">
                {this.renderProduct()}
            </div>
        )
    }
}
