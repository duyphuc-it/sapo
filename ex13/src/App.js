import React, { Component } from 'react'
import CategoryList from './component/CategoryList';
import ProductList from './component/ProductList';
// import ProductListData from './data/product-list.json';
// import CategoryListData from './data/category-list.json';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategory: true,
      categoryOfProduct: {
        name: '',
        category_id: ''
      }
    }
  }

  setCategoryId = (infoCate) => {
    this.setState({
      categoryOfProduct: infoCate,
      showCategory: false
    })
  }

  handleCategory = () => {
    this.setState(() => ({
      showCategory: true
    }))
  }

  display = () => {
    if (this.state.showCategory) {
      return <CategoryList setForeign={this.setCategoryId} CategoryListData={this.state.categoryListData}></CategoryList>
    }
    else {
      return <ProductList categoryOfProduct={this.state.categoryOfProduct} handleCategory={this.handleCategory}></ProductList>
    }
  }

  render() {

    if (this.state.productListData !== []) {
      return (
        <div className="boss">
          {this.display()}
        </div>
      )
    }
    else {
      return (
        <div className="container">
          <p className="text-center text-center">Loading....</p>
        </div>)
    }

  }
}
