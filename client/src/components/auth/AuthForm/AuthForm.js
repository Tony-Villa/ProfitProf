import React, { useState } from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './Auth.scss';

const AuthForm = ({ setAuth }) => {
  const [login, setLogin] = useState(false);

  return (
    <div className="authform">
      {login ? <Register setAuth={setAuth} /> : <Login setAuth={setAuth} />}
      {login ? (
        <div className="authform__switch">
          <p>
            Already have an account?{' '}
            <span className="authform__switch-btn" onClick={() => setLogin(!login)}>
              Sign In
            </span>
          </p>
          {/* <button onClick={() => setLogin(!login)}>Sign In!</button> */}
        </div>
      ) : (
        <div className="authform__switch">
          <p>
            Already have an account?{' '}
            <span className="authform__switch-btn" onClick={() => setLogin(!login)}>
              Register
            </span>
          </p>
          {/* <button onClick={() => setLogin(!login)}>Register!</button> */}
        </div>
      )}
    </div>
  );
};

export default AuthForm;
