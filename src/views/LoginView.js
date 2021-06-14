import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import '../components/ContactForm/ContactForm.scss';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };

  const [password, setPassword] = useState('');

  const handlePasswordChange = evt => {
    setPassword(evt.target.value);
  };

  // const handleChange = evt => {
  //   const {name, value} = evt.target;
  //   switch (name) {
  //     case "email":
  //       setEmail(value);
  //       break;

  //     case "password":
  //       setPassword(value);
  //       break;

  //     default:
  //       console.warn("Such type of field is not valid");
  //   }
  // }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="form-wrapper">
      <div className="form-view">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">
            <span className="form-label-title">E-mail</span>

            <input
              className="input"
              type="email"
              value={email}
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
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
