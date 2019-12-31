import React, { Component } from 'react';
import './App.css';
// import { USER_PASSWORD } from "./Constant";
import DashBoard from "./DashBoard";
import FormLogin from "./FormLogin";
import User_Password from "./User_Password.json";

class App extends Component {

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
            if (username === user.username && password === user.password) {
                this.setState({
                    show: true,
                    name: user.name
                });
                return true;
            } else {
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
        if (check === false) {
            this.setState({
                error: 'Username or Password is incorrect'
            });
        }
    };
    backHome = () => {
        this.setState({
            username: '',
            password: '',
            show: false,
            error: ''
        })
    };

    render() {
        let { show } = this.state;
        return (
            <div>
                {
                    show ? <DashBoard backHome={this.backHome} name={this.state.name} /> :
                        <FormLogin
                            onChangeUser={(e) => this.onChangeUser(e)}
                            onChangePassword={(e) => this.onChangePassword(e)}  // function
                            checkLogin={(e) => this.checkLogin(e)}
                            error={this.state.error}
                        />
                }
                {/* // show ? DashBoard : FormLogin là thay cho if (show === true) thì show ra DashBoard, show===false show ra formLogin */}
            </div>

        )
    }
}

export default App;
