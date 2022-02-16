import React, { useState } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';

const AuthForm = () => {
  const [login, setLogin] = useState(false);

  return (
    <div>
      {login ? <Register /> : <Login />}

      {login ? (
        <button onClick={() => setLogin(!login)}>Log In!</button>
      ) : (
        <button onClick={() => setLogin(!login)}>Sign Up! </button>
      )}
    </div>
  );
};

export default AuthForm;
