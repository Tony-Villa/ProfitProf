import React, { useContext } from 'react';
import AuthForm from '../../components/auth/AuthForm/AuthForm';
import { UserContext } from '../../Context/UserContext';

const Home = ({ isUser, setAuth }) => {
  const { user } = useContext(UserContext);

  console.log(user?.username);
  console.log(isUser);
  return (
    <div className='home'>
      <h1>Hello, Profit Prof</h1>

      <div className='authform'>
        <AuthForm setAuth={setAuth} />
      </div>
      
    </div>
  );
};

export default Home;
