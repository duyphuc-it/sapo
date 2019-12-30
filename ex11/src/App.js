import React, {Component} from 'react';
import './App.css';
import {USER_PASSWORD} from "./constant";
import DashBoard from "./dashBoard";
import FormLogin from "./FormLogin";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            show: false
        }
    }


    onChangeUser = (e) => {
        console.log(e);
        this.setState({
            username: e.target.value
        })
    }; //trường hợp có ít input

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };// trường hợp có ít input


    // trường hợp có nhiều input
    // onChange=(e)=>{
    //     let value=e.target.value;
    //     let name =e.target.name;
    //     this.setState({
    //         name:[value]
    //     })
    // };
    // trường hợp có nhiều input

    checkLogin = () => {
        
        let {username, password} = this.state;

        if (username === USER_PASSWORD.user && password === USER_PASSWORD.password) { 
            this.setState({
                show: true
            });
        } else {
            alert('email hoặc mật khẩu k đúng')
        }
    };
    backHome=()=>{
        this.setState({
            show:false
        })
    };

    render() {
        let {show} = this.state;
        return (
            <div>
                {
                    show ? <DashBoard backHome={this.backHome}/> :
                        <FormLogin
                            onChangeUser={(e)=>this.onChangeUser(e)}
                            onChangePassword={(e)=>this.onChangePassword(e)}
                            checkLogin={this.checkLogin}
                        />
                } 
                {/* // show ? DashBoard : FormLogin là thay cho if (show=== true) thì show ra DashBoard, show===false show ra formLogin */}
            </div>

        )
    }
}

export default App;
