import React, { useState } from 'react';

const Register = ({ setAuth }) => {
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
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <form className="" onSubmit={onSubmitForm} autoComplete="off">
        <input className="" type="email" name="email" placeholder="email" value={email} onChange={(e) => onChange(e)} />
        <input
          className=""
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <input
          className=""
          type="text"
          name="first_name"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => onChange(e)}
        />
        <input
          className=""
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <button className="mt-1 btn-search submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
