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
    <div className='login_div'>
      <div className='login_header'>
        <h3>Register</h3>
      </div>
      

      <form className="login_form" onSubmit={onSubmitForm} autoComplete="off">
        <input 
        className="input-auth"
        id="login_email"
        type="email" 
        name="email" 
        placeholder="email" 
        value={email} 
        onChange={(e) => onChange(e)} 
        />
        <input
          className="input-auth"
          id="login_username"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-auth"
          id="login_firstname"
          type="text"
          name="first_name"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-auth"
          id="login_password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <button className="mt-1 btn-search submit" id="login_signup">Sign Up</button>
        <h6>By choosing an account, you agree to our Terms and have read and acknowledge our Global Privacy Statement.</h6>
      </form>
    </div>
  );
};

export default Register;
