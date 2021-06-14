import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

import "../components/ContactForm/ContactForm.scss";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.warn("Such type of field is not valid");
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-wrapper">
      <div className="form-view">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">
            <span className="form-label-title">Name</span>
            <input
              className="input"
              type="text"
              value={name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label className="form-label">
            <span className="form-label-title">E-mail</span>
            <input
              className="input"
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label className="form-label">
            <span className="form-label-title">Password</span>
            <input
              className="input"
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
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

// class RegisterView extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onRegister(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     return (
//       <div className="form-wrapper">
//         <div className="form-view">
//           <form className="form" onSubmit={this.handleSubmit}>
//             <label className="form-label">
//               <span className="form-label-title">Name</span>
//               <input
//                 className="input"
//                 type="text"
//                 value={this.state.name}
//                 onChange={this.handleChange}
//                 name="name"
//               />
//             </label>
//             <label className="form-label">
//               <span className="form-label-title">E-mail</span>
//               <input
//                 className="input"
//                 type="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//                 name="email"
//               />
//             </label>
//             <label className="form-label">
//               <span className="form-label-title">Password</span>
//               <input
//                 className="input"
//                 type="password"
//                 value={this.state.password}
//                 name="password"
//                 onChange={this.handleChange}
//               />
//               <button className="button button-center" type="submit">
//                 Sign Up
//               </button>
//             </label>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// RegisterView.propTypes = {
//   onRegister: PropTypes.func.isRequired,
// };

// // const mapDispatchToProps = {
// //   onRegister: authOperations.register,
// // };

// const mapDispatchToProps = (dispatch) => ({
//   onRegister: (data) => dispatch(authOperations.register(data)),
// });

// export default connect(null, mapDispatchToProps)(RegisterView);
