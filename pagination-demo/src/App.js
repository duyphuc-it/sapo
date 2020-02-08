import React, { Component } from "react";
import Pagination from "react-js-pagination";
import axios from 'axios';

// npm install react-js-pagination

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      size: 1,
      totalItemsCount: 0,
      data: []
    }
  }

  componentDidMount() {
    this.getDataApi()
  }

  getDataApi = () => {
    // console.log(this.state.activePage)
    axios.get(`http://localhost:8081/admin/purchase_orders?page=${this.state.activePage}&size=${this.state.size}`)
      .then(res => {
        const dataJson = res.data;
        console.log(res.data)
        this.setState({
          data: dataJson.listResult,
          totalItemsCount: dataJson.count
        })
      })
      .catch(error => console.log(error));
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber }, () => this.getDataApi());
  }

  render() {
    console.log("state",this.state.data)
    return (
      <div>
        <div>
          {this.state.data === []?console.log("rỗng") : "có dữ liệu"}
        </div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.size}  //size số bản ghi 1 trang
          totalItemsCount={this.state.totalItemsCount}   // tổng số bản ghi
          pageRangeDisplayed={5}  // số nút hiển thị
          onChange={this.handlePageChange}
          itemClass={"page-item"}
          linkClass={"page-link"}
        />
      </div>
    );
  }
}