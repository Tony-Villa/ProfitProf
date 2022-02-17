import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import PieChart from '../../components/dashboard/pieChart/PieChart';
import SavingsSummary from '../../components/dashboard/savingsSummary/SavingsSummary';
import DashNav from '../../components/layout/DashNav/DashNav';
import { UserContext } from '../../Context/UserContext';
import './Dashboard.scss';

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

  const getExpenses = async () => {
    try {
      console.log('user + ', user.id);
      const res = await fetch(`https://profitprof.herokuapp.com/v1/expenses/show/${user.id}`);
      const parsedRes = await res.json();
      const data = parsedRes.expenses;

      console.log('expenses + ', data);

      setExpenses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGoals = async () => {
    try {
      console.log('user + ', user.id);
      const res = await fetch(`https://profitprof.herokuapp.com/v1/goals/show/${user.id}`);
      const parsedRes = await res.json();
      const data = parsedRes.goals;

      console.log('goals + ', data);

      setGoals(data);
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
    getIncome();
    getExpenses();
    getGoals();
    // console.log(income);
  }, [user?.id]);

  return (
    <div className="dashboard flex">
      <div className="dashboard__nav mr-2">
        <DashNav logout={logout} />
      </div>
      {/* {user?.username && <h1>Welcome, {user.first_name}</h1>} */}

      <div className="dashboard__summary grid mt-1 mb-1">
        <div className="dashboard__savings">
          <SavingsSummary income={income} />
        </div>
        <div className="dashboard__goals">
          <p>Goals go here</p>
        </div>
        <div className="dashboard__expenses">
          <p>Expenses go here</p>
          <PieChart />
        </div>
        <div className="dashboard__barGraph">
          <p>barGraph go here</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
