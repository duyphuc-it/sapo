import React, { Component } from 'react';

class FormLogin extends Component {
    render() {
        return (
            <div className="box-login">
                <h1>Login</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e => this.props.onChangeUser(e))}
                            aria-describedby="emailHelp"
                            name='username'
                            autoComplete='off'
                            placeholder="Enter username"
                            id="username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            autoComplete='off'
                            name='password'
                            id="password"
                            onChange={(e => this.props.onChangePassword(e))}
                            placeholder="Password"
                        />
                    </div>
                    <div className="error" >
                       {this.props.error}
                    </div>
                    <div className="submit">
                        <button  className="btn btn-primary" onClick={(e) => this.props.checkLogin(e)}>
                            Login
                        </button>
                    </div>
                    </form>
                
            </div>
        );
    }
}

export default FormLogin;