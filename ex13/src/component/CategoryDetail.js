import React, { Component } from 'react'

export default class CategoryDetail extends Component {

    render() {
        let category = this.props.category;
        return (
            <div className="detail">
                <h5>Tên: {category.name}</h5>
                <h5>Ngày tạo: {category.createAt}</h5>
                <h5>Ngày sửa: {category.modifiedAt}</h5>
            </div>
        )
    }
}
