import { Component, Fragment } from "react";

export default class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Login</h1>
        <form onSubmit={this.props.handleLoginSubmit}>
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    );
  }
}
