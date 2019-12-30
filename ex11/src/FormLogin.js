import React, {Component} from 'react';

class FormLogin extends Component {
    render() {
        return (
            <div className="box-login">
                <h1>Login</h1>
                <form action="#">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e =>this.props.onChangeUser(e))}
                            aria-describedby="emailHelp"
                            name='username'
                            autoComplete='off'
                            placeholder="Enter email"
                            ref={ (username) => { this.username = username }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            autoComplete='off'
                            name='password'
                            onChange={(e =>this.props.onChangePassword(e))}
                            placeholder="Password"
                        />
                    </div>
                    <div className="submit">
                        <button type="submit" className="btn btn-primary" onClick={() => this.props.checkLogin()}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormLogin;