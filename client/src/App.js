import AuthForm from './components/auth/AuthForm/AuthForm';
import { UserContext } from './Context/UserContext';
import { useEffect, useMemo, useState } from 'react';
import AppRoutes from './routes/config/Routes';
import { ReloadContext } from './Context/ReloadContext';
import './app.scss';

function App() {
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(null);
  const [isReload, setIsReload] = useState(false);

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
      <UserContext.Provider value={value}>
        <ReloadContext.Provider value={{ isReload, setIsReload }}>
          <AppRoutes setAuth={setAuth} isUser={isUser} />
        </ReloadContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
