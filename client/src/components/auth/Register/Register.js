import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../AuthForm/Auth.scss';

const Register = ({ setAuth }) => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    first_name: '',
    password: '',
  });

  const { email, username, first_name, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, username, first_name, password };

      //   console.log(body);

      const res = await fetch(`https://profitprof.herokuapp.com/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const parsedRes = await res.json();

      localStorage.setItem('token', parsedRes.token);
      setAuth(true);
      navigate(`/dashboard`);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="login_div">
      <div className="login_header">
        <h3>Register</h3>
      </div>

      <form className="register_form" onSubmit={onSubmitForm} autoComplete="off">
        <label htmlFor="register_email" className="content-1 ">
          Email
        </label>
        <input
          className="input-auth"
          id="register_email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="register_username" className="content-1 ">
          Username
        </label>
        <input
          className="input-auth"
          id="register_username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="register_firstname" className="content-1 ">
          First Name
        </label>
        <input
          className="input-auth"
          id="register_firstname"
          type="text"
          name="first_name"
          value={first_name}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="register_password" className="content-1 ">
          Password
        </label>
        <input
          className="input-auth"
          id="register_password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <button className="btn-yellow login__submit" id="login_signup">
          Sign Up
        </button>
        <div>
          <p>
            By choosing an account, you agree to our Terms and have read and acknowledge our Global Privacy Statement.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
