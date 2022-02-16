import React, { useContext } from 'react';
import AuthForm from '../../components/auth/AuthForm/AuthForm';
import { UserContext } from '../../Context/UserContext';

const Home = ({ isUser, setAuth }) => {
  const { user } = useContext(UserContext);

  console.log(user?.username);
  console.log(isUser);
  return (
    <div>
      <h1>Hello, Profit Prof</h1>

      <AuthForm setAuth={setAuth} />
    </div>
  );
};

export default Home;
