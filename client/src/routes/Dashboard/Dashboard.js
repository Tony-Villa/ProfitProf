import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../Context/UserContext';

const Dashboard = ({ setAuth }) => {
  const [income, setIncome] = useState({});
  const [expenses, setExpenses] = useState({});
  const [goals, setGoals] = useState({});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const getIncome = async () => {
    try {
      console.log('user + ', user.id);
      const res = await fetch(`https://profitprof.herokuapp.com/v1/income/show/${user.id}`);
      const parsedRes = await res.json();
      const data = parsedRes.income;

      console.log('income + ', data);

      setIncome(data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/');
  };

  useEffect(() => {
    if (user?.id) {
      getIncome();
      console.log(income);
    }
  }, [user?.id]);

  return (
    <div className="dashboard">
      {user?.username && <h1>Welcome, {user.first_name}</h1>}

      {user?.username && <button onClick={(e) => logout(e)}>Log Out</button>}
      <div>
        <p>data goes here</p>
      </div>
    </div>
  );
};

export default Dashboard;
