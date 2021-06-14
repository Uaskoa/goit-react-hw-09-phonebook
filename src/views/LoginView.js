import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import PropTypes from "prop-types";
import "../components/ContactForm/ContactForm.scss";

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-view">
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="form-label">
              <span className="form-label-title">E-mail</span>
              <input
                className="input"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </label>
            <label className="form-label">
              <span className="form-label-title">Password</span>
              <input
                className="input"
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handleChange}
              />
              <button className="button button-center" type="submit">
                Login
              </button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

LoginView.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

// const mapDispatchToProps =dispatch => ({
//   onLogin:(data) =>  dispatch(authOperations.login(data)),
// });

export default connect(null, mapDispatchToProps)(LoginView);
