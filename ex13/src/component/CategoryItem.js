import React, { Component } from 'react'
import CategoryDetail from './CategoryDetail';


export default class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false
        }
    }

    showDetail = () => {
        if (this.state.showDetail) {
            return <CategoryDetail category={this.props.category} back={this.handleDetail}></CategoryDetail>
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
                    <h2 className="category-name">{this.props.category.name}</h2>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-info" onClick={this.handleDetail}>Chi tiết</button>
                        <button type="button" className="btn btn-light" onClick={() => {
                            let infoCate = {
                                "name": this.props.category.name,
                                "id": this.props.category.id
                            }
                            return this.props.setForeign(infoCate);
                        }}>Sản phẩm</button>
                        <button type="button" className="btn btn-warning"><i className="far fa-edit" /></button>
                    </div>
                </div>
                {this.showDetail()}
            </div>
        )
    }
}
