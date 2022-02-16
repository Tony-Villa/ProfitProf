import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../../Context/UserContext';

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
    <div>
      <h1>Login</h1>

      <form className="login_username" onSubmit={onSubmitForm} autoComplete="off">
        <input
          className="input-auth"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-auth"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <button className="btn-search login__submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
