import React, { Component } from 'react'
import axios from 'axios';


export default class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '',
            linkImage: '',
            amount: '',
            unitSale: '',
            categoryId: '',
            description: ''
        }
    }

    handleSubmit = () => {
        const product = this.state;
        axios({
            method: 'PUT',
            url: `http://localhost:8080/admin/product/${this.props.product.id}`,
            data: product
        }).then(res => {
            if (res.status === 200) {
                this.props.reloadApi();
            }
            console.log(res.data);
        });

    }

    componentDidMount() {
        let { name, price, amount, unitSale, categoryId, description, linkImage } = this.props.product;
        this.setState({
            name: name,
            price: price,
            linkImage: linkImage,
            amount: amount,
            unitSale: unitSale,
            categoryId: categoryId,
            description: description
        })
    }

    onChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        console.log(`name: ${name}  <=> value: ${value}`);
        this.setState({
            [name]: value
        })
    };

    renderFrom = () => (
        <div className="from-edit">
            <h2 className="mb-3">Chỉnh sửa product</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" id="name" name="name" defaultValue={this.props.product.name} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price: </label>
                    <input type="number" className="form-control" name="price" id="price" defaultValue={this.props.product.price} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="linkImage">Link image: </label>
                    <input type="number" className="form-control" name="linkImage" id="linkImage" defaultValue={this.props.product.price} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount: </label>
                    <input type="number" className="form-control" name="amount" id="amount" defaultValue={this.props.product.amount} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="unitSale">Unit sale: </label>
                    <input type="number" className="form-control" name="unitSale" id="unitSale" defaultValue={this.props.product.unitSale} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cateId">Category Id: </label>
                    <input type="number" className="form-control" name="cateId" id="cateId" defaultValue={this.props.product.categoryId} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea className="form-control" name="description" id="description" rows={3} defaultValue={this.props.product.description} onChange={this.onChange} />
                </div>
                <div className="btn-group text-center d-block" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-success" onClick={() => this.handleSubmit()}>Save</button>
                    <button type="button" className="btn btn-warning" onClick={() => this.props.handleEditProduct()}>Quay lại</button>
                </div>
            </form>
        </div>
    )


    render() {
        console.log(this.state.name)
        return (
            this.renderFrom()
        )
    }
}
