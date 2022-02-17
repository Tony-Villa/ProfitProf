import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import DashNav from '../../components/layout/DashNav/DashNav';
import { UserContext } from '../../Context/UserContext';
import '../Dashboard/Dashboard.scss';
import './Goals.scss';
import '../../components/dashboard/goalsSummary/GoalsSummary.scss';
import GoalCard from '../../components/shared/GoalCard/GoalCard';
import plus from '../../assets/icons/Pluse.png';

const Goals = ({ setAuth }) => {
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

  const genGoalCards = (goalArr) => {
    return goalArr.map((goal, idx) => goal.current_amount < goal.total_amount && <GoalCard key={idx} {...goal} />);
  };

  const genCompleteGoalCards = (goalArr) => {
    return goalArr.map((goal, idx) => goal.current_amount >= goal.total_amount && <GoalCard key={idx} {...goal} />);
  };

  useEffect(() => {
    getIncome();
    getExpenses();
    getGoals();
    // console.log(income);
  }, [user?.id]);

  return (
    <div className="goals flex">
      <div className="dashboard__nav mr-2">
        <DashNav logout={logout} />
      </div>
      <div className="goals__content flex">
        <div className="goals__top goals__container">
          <h3>Welcome to goals y'all</h3>
          <div className="flex">
            <div className="goals-sum__new-goal flex">
              <div className="goals-sum__goal-add">
                <h6>Add New Goal</h6>
                <img src={plus} alt="" />
              </div>
            </div>
            <div className="goals-sum__cards-container flex">
              {goals.length ? genGoalCards(goals) : <h4>loading...</h4>}
            </div>
          </div>
        </div>
        <div className="goals__bottom goals__container">
          <h3>Welcome to goals y'all</h3>
          <div className="goals-sum__cards-container flex">
            {goals.length ? genCompleteGoalCards(goals) : <h4>loading...</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
