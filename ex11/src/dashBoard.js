import React, {Component} from 'react';

class DashBoard extends Component {
    render() {
        return (
            <div className='container'>
                <h2>DashBoard demo</h2>
                <div> <img src='https://statics.vntrip.vn/images/403-forbidden.gif' alt='dashboard'/></div>
                <button onClick={this.props.backHome} className='btn btn-primary'>quay về login</button>
            </div>
        )
    }
}

export default DashBoard;