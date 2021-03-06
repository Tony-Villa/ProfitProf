import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../../Context/UserContext';
import '../AuthForm/Auth.scss';

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const { username, password } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };

      const res = await fetch(`https://profitprof.herokuapp.com/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const parsedRes = await res.json();

      if (parsedRes.token) {
        localStorage.setItem('token', parsedRes.token);
        setAuth(true);
        navigate(`/dashboard`);
        // toast.success('Login Successful!', { theme: 'dark' });
      } else {
        setAuth(false);
        // toast.error(parsedRes, { theme: 'dark' });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="login_div">
      <div className="login_header">
        <h3>Sign In</h3>
      </div>

      <form className="login_form" onSubmit={onSubmitForm} autoComplete="off">
        <label htmlFor="login_username" className="content-1 mb-half">
          Username
        </label>
        <input
          className="input-auth"
          id="login_username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <label htmlFor="login_password" className="content-1 mb-half">
          Password
        </label>
        <input
          className="input-auth"
          id="login_password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <button className="btn-yellow login__submit" id="login_submit">
          Sign In
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

export default Login;
