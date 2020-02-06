import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// npm install react-bootstrap bootstrap


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      size: 1,
      totalPages: 0,
      data: []
    }
  }

  componentDidMount() {
    this.getDataApi();
  }

  getDataApi = () => {
    // console.log(this.state.activePage)
    axios.get(`http://localhost:8081/admin/purchase_orders?page=${this.state.activePage}&size=${this.state.size}`)
      .then(res => {
        const dataJson = res.data;
        console.log(res.data)
        this.setState({
          data: dataJson.listResult,
          totalPages: dataJson.count
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.totalPages)
    return (
      <div>
        <Pagination>
          <Pagination.First onClick={() => this.setState({activePage:1}, () => this.getDataApi())}/>
          <Pagination.Prev onClick={() => this.setState((prevState) => ({ activePage: prevState.activePage === 1 ? 1 : prevState.activePage - 1 }), () => this.getDataApi())} />
          <Pagination.Item active={this.state.activePage === 1} onClick={() => { this.setState({ activePage: 1 }, () => this.getDataApi()) }}>{1}</Pagination.Item>
          <Pagination.Item active={this.state.activePage === 2} onClick={() => { this.setState({ activePage: 2 }, () => this.getDataApi()) }}>{2}</Pagination.Item>
          <Pagination.Item active={this.state.activePage === 3} onClick={() => { this.setState({ activePage: 3 }, () => this.getDataApi()) }}>{3}</Pagination.Item>
          <Pagination.Item active={this.state.activePage === 4} onClick={() => { this.setState({ activePage: 4 }, () => this.getDataApi()) }}>{4}</Pagination.Item>
          <Pagination.Next onClick={() => this.setState((prevState) => ({ activePage: prevState.activePage === prevState.totalPages ? prevState.totalPages : prevState.activePage + 1 }), () => this.getDataApi())}/>
          <Pagination.Last onClick={() => this.setState((prevState) => ({activePage: prevState.totalPages}), () => this.getDataApi())}/>
        </Pagination>
      </div>
    )
  }
}
