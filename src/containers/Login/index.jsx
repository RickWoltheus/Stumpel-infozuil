import React, { Component } from 'react';
import { Input, Button, Icon } from 'antd';
import history from '../../';
import logo from '../../assets/images/logo.svg';
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
    this.props.history.push('/');
  }

  componentDidMount() {
    if (localStorage.getItem('isAuth') === 'true') {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="iz-login">
        <div className="iz-login__form-wrapper">
          <img src={logo} className="iz-login__logo" alt="" />
          <form>
            <Icon className="iz-login__back" onClick={() => { history.goBack(); }} type="arrow-left" />
            <label htmlFor="iz-login__name">Username</label>
            <Input id="iz-login__name" value={this.state.username} onChange={this.handleChangeUsername} />
            <label htmlFor="iz-login__password">Password</label>
            <Input.Password id="iz-login__password" value={this.state.password} onChange={this.handleChangePassword} />
            <a href style={{ float: 'right' }}>Wachtwoord vergeten</a>
            <Button type="submit" className="iz-login__submit" block onClick={this.handleSubmit}>Submit</Button>
          </form>
        </div>
      </div>);
  }
}

export default Login;
