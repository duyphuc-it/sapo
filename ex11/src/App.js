import React, { Component } from 'react';
import './App.css';
// import { USER_PASSWORD } from "./Constant";
import DashBoard from "./DashBoard";
import FormLogin from "./FormLogin";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: false,
            username: '',
            name: ''
        }
    }

    backHome = () => {
        this.setState({
            login: false
        });
    };

    loginStatus = (e, username, name) => {
        console.log('login '+e);
        if(e === true) {
            this.setState({
                login: true,
                username: username,
                name: name
            })
        }
    }

    render() {
        console.log("render lại");
        let { login } = this.state;
        return (
            <div>
                {
                    login ? <DashBoard backHome={this.backHome} name={this.state.name} /> :
                        <FormLogin login={this.loginStatus}/>
                }
                {/* // show ? DashBoard : FormLogin là thay cho if (show === true) thì show ra DashBoard, show===false show ra formLogin */}
            </div>

        )
    }
}

export default App;
