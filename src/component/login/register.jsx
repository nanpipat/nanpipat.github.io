import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-containers" ref={this.props.containerRef}>
        <div className="headers">Register</div>
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
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-groups">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footers">
          <button type="button" className="btns">
            Register
          </button>
        </div>
      </div>
    );
  }
}