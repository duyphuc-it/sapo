import React, { Component } from 'react'
import CategoryItem from './CategoryItem';
import Pagination from './Pagination';
import axios from 'axios';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryListData: [],
            page: 0,
            limit: 5,
            totalPage: 0
        }
    }

    componentDidMount() {
        this.getDataApi(0);
    }

    getDataApi = (page) => {
        this.setState({
            page: page
        })
        axios.get(`http://localhost:8080/admin/category?page=${page}&limit=${this.state.limit}`)
            .then(res => {
                const categoryListData = res.data;
                this.setState({
                    categoryListData: categoryListData
                })
            })
            .catch(error => console.log(error));
    }

    renderItem = () => {
        if (this.state.categoryListData !== []) {
            return (this.state.categoryListData.map((category) => (
                <CategoryItem key={category.id} category={category} setForeign={this.props.setForeign}></CategoryItem>
            )))
        } else {
            return (<div>Loading...</div>)
        }
    }

    render() {
        return (
            <div className="container">
                <div className="category-list">
                    <div className="category-list-titel">
                        <h1>Category</h1>
                    </div>
                    {this.renderItem()}
                    <Pagination limit={this.state.limit} getDataApi={this.getDataApi} page={this.state.page}></Pagination>
                </div>
            </div>
        )
    }
}
