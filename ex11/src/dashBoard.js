import React, {Component} from 'react';

class DashBoard extends Component {
    render() {
        return (
            <div className='container'>
                <h2>DashBoard Demo</h2>
                <h3>Hello {this.props.name}</h3>
                <div>
                <img src="https://marketingsmokeandmirrors.files.wordpress.com/2018/07/shutterstock_142333726b.jpg?w=300&h=225" alt="done" /></div>
                <button onClick={this.props.backHome} className='btn btn-primary'>Logout</button>
            </div>
        )   
    }
}

export default DashBoard;