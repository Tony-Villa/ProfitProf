import './reset.scss';
import './variables.scss';
import './app.scss';
import './media.scss';

import AuthForm from './components/auth/AuthForm/AuthForm';
import { UserContext } from './Context/UserContext';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const setAuth = (boolean) => {
    setIsUser(boolean);
  };

  const getUser = async () => {
    try {
      const res = await fetch(`https://profitprof.herokuapp.com/v1/auth/profile`, {
        method: 'GET',
        headers: { token: localStorage.token },
      });
      const parsedRes = await res.json();

      setUser(parsedRes);
    } catch (err) {
      console.log(err.message);
    }
  };

  const isAuth = async () => {
    try {
      const res = await fetch(`https://profitprof.herokuapp.com/v1/auth/isVerified`, {
        method: 'GET',
        headers: { token: localStorage.token },
      });
      const parsedRes = await res.json();

      if (parsedRes !== true) {
        return;
      }

      parsedRes == true ? setAuth(true) : setAuth(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
  };

  useEffect(() => {
    isAuth();
  });

  useEffect(() => {
    getUser();
    console.log(user?.username);
    console.log(isUser);
  }, [isUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <h1>Hello, Profit Prof</h1>
        {user?.username && <h3>hello {user.first_name}</h3>}
        {isUser && <button onClick={(e) => logout(e)}>Log Out</button>}
        <AuthForm setAuth={setAuth} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
