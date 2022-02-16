import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../Context/UserContext';

const Dashboard = ({ setAuth }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  console.log(user?.id);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/');
  };

  return (
    <div className='dashboard'>
      {user?.username && <h1>Welcome, {user.first_name}</h1>}

      {user?.username && <button onClick={(e) => logout(e)}>Log Out</button>}
      <div>
        <p>data goes here</p>
      </div>
    </div>
  );
};

export default Dashboard;
