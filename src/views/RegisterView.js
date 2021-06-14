import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../redux/auth";
import PropTypes from "prop-types";
import "../components/ContactForm/ContactForm.scss";

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-view">
          <form className="form" onSubmit={this.handleSubmit}>
            <label className="form-label">
              <span className="form-label-title">Name</span>
              <input
                className="input"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </label>
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
                Sign Up
              </button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

RegisterView.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

const mapDispatchToProps = (dispatch) => ({
  onRegister: (data) => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
