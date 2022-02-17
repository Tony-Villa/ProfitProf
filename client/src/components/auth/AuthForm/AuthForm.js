import React, { useState } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import "./Auth.scss"

const AuthForm = ({ setAuth }) => {
  const [login, setLogin] = useState(false);

  return (
    <div className='authform'>
      {login ? <Register setAuth={setAuth} /> : <Login setAuth={setAuth} />}

      {login ? (
        <button onClick={() => setLogin(!login)}>Log In!</button>
      ) : (
        <button onClick={() => setLogin(!login)}>Register!</button>
      )}

        
    </div>
  );
};

export default AuthForm;
