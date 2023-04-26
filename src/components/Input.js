import React from "react";

export class UserName extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <input type="text" className="form-control" placeholder="Username" value={this.props.value} onChange={this.props.onChange} />
      );
    }
  }
  
  export class PassWord extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <input type="password" className="form-control" placeholder="Password" value={this.props.value} onChange={this.props.onChange} />
      );
    }
  }