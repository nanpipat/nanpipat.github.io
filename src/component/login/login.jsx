import React from 'react';
import loginImg from "../../login.svg";
import {Link , useHistory } from 'react-router-dom';


export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  

  gotoApp() {
    let history = useHistory();

    history.push("/App");
  }

  render() {
    return (
      <div className="base-containers" ref={this.props.containerRef}>
        <div className="headers">Login</div>
        <div className="contents">
          <div className="images">
            <img src={loginImg} />
          </div>
          <div className="forms">
            <div className="form-groups">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-groups">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footers">
            <Link to="/App">
            <button type="button" className="btns">
            Login
          </button>
            </Link>
        </div>
      </div>
    );
  }
}