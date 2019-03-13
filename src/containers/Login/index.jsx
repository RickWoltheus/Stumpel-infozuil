import React, { Component } from 'react';
import { Input, Button } from 'antd';

import './style.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    if (this.state.username !== 'root' && this.state.password !== 'root') {
      return false;
    }

    localStorage.setItem('isAuth', true);
    document.location.reload();
  }

  render() {
    return (
      <div className="iz-login">
        <div className="iz-login__form-wrapper">
          <label htmlFor="iz-login__name">Username</label>
          <Input id="iz-login__name" value={this.state.username} onChange={this.handleChangeUsername} />
          <label htmlFor="iz-login__password">Password</label>
          <Input.Password id="iz-login__password" value={this.state.password} onChange={this.handleChangePassword} />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </div>
      </div>);
  }
}

export default Login;
