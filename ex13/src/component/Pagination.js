import React, { Component } from 'react'
import axios from 'axios';
import PaginationItem from './PaginationItem';
export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPage: 0
        }
    }

    componentDidMount() {
        this.countPage();
    }

    countPage = () => {
        axios.get(`http://localhost:8080/admin/category/count/${this.props.limit}`)
            .then(res => {
                const totalPage = res.data;
                this.setState({
                    totalPage: totalPage
                })
            })
            .catch(error => console.log(error));
    }

    renderPaginationItem = () => {
        let listBtn = [];

        listBtn.push(<PaginationItem key={0} getDataApi={this.props.getDataApi} currPage={this.props.page - 1} page={this.props.page}>Previous</PaginationItem>)
        for (let i = 1; i <= this.state.totalPage; i++) {
            listBtn.push(<PaginationItem key={i} getDataApi={this.props.getDataApi} currPage={i - 1} page={this.props.page}>{i}</PaginationItem>)
        }
        listBtn.push(<PaginationItem key={this.state.totalPage + 1} getDataApi={this.props.getDataApi} currPage={this.props.page + 1} page={this.props.page}>Next</PaginationItem>)
        return (
            <ul className="pagination">
                {listBtn.map((item) => item)}
            </ul>
        )
    }

    render() {
        return (
            <nav aria-label="Page navigation example" className="mt-3 ">
                <ul className="pagination">
                    {this.renderPaginationItem()}
                </ul>
            </nav>
        )
    }
}
