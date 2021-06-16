import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import '../components/ContactForm/ContactForm.scss';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.register(user));
    setUser({
      name: '',
      email: '',
      password: '',
    });
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
              value={user.name}
              onChange={handleChange}
              name="name"
            />
          </label>
          <label className="form-label">
            <span className="form-label-title">E-mail</span>
            <input
              className="input"
              type="email"
              value={user.email}
              onChange={handleChange}
              name="email"
            />
          </label>
          <label className="form-label">
            <span className="form-label-title">Password</span>
            <input
              className="input"
              type="password"
              value={user.password}
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


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleChange = evt => {
    //   const { name, value } = evt.target;

    //   switch (name) {
    //     case 'name':
    //       setName(value);
    //       break;

    //     case 'email':
    //       setEmail(value);
    //       break;

    //     case 'password':
    //       setPassword(value);
    //       break;

    //     default:
    //       console.warn('Such type of field is not valid');
    //   }
    // };

    // const handleSubmit = evt => {
    //   evt.preventDefault();
    //   dispatch(authOperations.register({ name, email, password }));
    //   setName('');
    //   setEmail('');
    //   setPassword('');
    // };