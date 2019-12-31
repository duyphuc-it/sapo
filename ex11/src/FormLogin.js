import React, { Component } from 'react';
import User_Password from "./User_Password.json";

class FormLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            show: false,
            error: ''
        }
    }


    onChangeUser = (e) => {
        this.setState({
            username: e.target.value
        })
        
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    // trường hợp có nhiều input
    // onChange=(e)=>{
    //     let value=e.target.value;
    //     let name =e.target.name;
    //     this.setState({
    //         name:[value]
    //     })
    // };

    checkLogin = (e) => {
        e.preventDefault();

        let { username, password } = this.state;

        let check = true;

        User_Password.map((user, key) => {
            console.log(user.username)
            if (username === user.username && password === user.password) {
                console.log("oke");
                this.setState({
                    show: true,
                    name: user.name
                });
                this.props.login(true, user.username, user.name);
                return true;
            } else {
                console.log("not return")
                check = false;
                return false;
            }
        });


        

        // if (username === USER_PASSWORD.username && password === USER_PASSWORD.password) {
        //     this.setState({
        //         show: true
        //     });
        // } else {
        //     // alert("username or password is incorrect");
        //     this.setState({
        //         error: 'Username or Password is incorrect'
        //     })
        // }
        console.log(check);

        if (check === false) {
            this.setState({
                error: 'Username or Password is incorrect'
            });
        }
    };

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
                            onChange={this.onChangeUser}
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
                            onChange={this.onChangePassword}
                            placeholder="Password"
                        />
                    </div>
                    <div className="error" >
                        {this.props.error}
                    </div>
                    <div className="submit">
                        <button className="btn btn-primary" onClick={this.checkLogin}>
                            Login
                        </button>
                    </div>
                </form>

            </div>
        );
    }
}

export default FormLogin;