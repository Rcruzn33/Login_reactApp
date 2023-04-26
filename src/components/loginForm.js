import React from "react";
import SignButton from "./button";
import { UserName } from "./Input";
import { PassWord } from "./Input";
import "bootstrap/dist/css/bootstrap.css";


export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Username: ${this.state.username}, Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
        <div className="card w-25">
          <div className="card-header bg-info d-flex justify-content-center align-items-center">
            <h3>Login</h3>
          </div>
          <div className="card-body d-flex justify-content-center align-items-center">
            <form onSubmit={this.handleSubmit}>
              <label>
                Username:
                <UserName value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
              </label>
              <br />
              <label>
                Password:
                <PassWord value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
              </label>
            </form>
          </div>
          <div className="card-footer bg-info d-flex justify-content-center align-items-center">
          <br />
          <SignButton />
          </div>
        </div>
      </div>
    );
  }
}