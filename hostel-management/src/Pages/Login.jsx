import React, { PureComponent } from 'react'
import './Login.css'

export default class Login extends PureComponent {
  render() {
    return (
      <div>
        <img id='logo' src="https://i.ibb.co.com/RkK8pHt3/Logo-4x-8.png" alt="" />
        <h2>Login to your account</h2>
        <div id="form">
            <p>Email</p>
            <input type="email" />
            <p>Password</p>
            <input type="text" />
            <br />
            <button type="submit">Login</button>
        </div>
      </div>
    )
  }
}
