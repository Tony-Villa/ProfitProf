import './reset.scss';
import './variables.scss';
import './app.scss';
import './media.scss';

import AuthForm from './components/auth/AuthForm/AuthForm';
import { UserContext } from './Context/UserContext';
import { useState } from 'react';

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

  useEffect(() => {
    isAuth();
  });

  useEffect(() => {
    getUser();
  }, [isUser]);

  return (
    <div className="App">
      <h1>Hello, Profit Prof</h1>
      <AuthForm setAuth={setAuth} />
    </div>
  );
}

export default App;
