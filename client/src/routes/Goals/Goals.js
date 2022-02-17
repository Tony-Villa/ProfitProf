import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import DashNav from '../../components/layout/DashNav/DashNav';
import { UserContext } from '../../Context/UserContext';
import '../Dashboard/Dashboard.scss';
import './Goals.scss';
import '../../components/dashboard/goalsSummary/GoalsSummary.scss';
import GoalCard from '../../components/shared/GoalCard/GoalCard';
import plus from '../../assets/icons/Pluse.png';
import ModalGoal from '../../components/shared/ModalGoal/ModalGoal';
import AddGoal from '../../components/shared/AddGoal/AddGoal';
import { ReloadContext } from '../../Context/ReloadContext';

const Goals = ({ setAuth }) => {
  const [goals, setGoals] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { isReaload, setIsReaload } = useContext(ReloadContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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
    getGoals();
    // console.log(income);
  }, [user?.id, isReaload]);

  return (
    <div className="goals flex">
      <div className="dashboard__nav ">
        <DashNav logout={logout} />
      </div>
      <div className="goals__content flex">
        <div className="goals__top goals__container">
          <h4>Current</h4>
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
            <div className="goals__modal-btn-container">
              <button class="goals__open-modal-btn" onClick={() => setIsOpen(true)}></button>
              {isOpen && (
                <ModalGoal className="goals__modal-open" closeModal={setIsOpen}>
                  <div className="goals__inner-form">
                    <AddGoal closeModal={setIsOpen} />
                  </div>
                </ModalGoal>
              )}
            </div>
          </div>
        </div>
        <div className="goals__bottom goals__container">
          <h4>Achieved</h4>
          <div className="goals-sum__cards-container flex">
            {goals.length ? genCompleteGoalCards(goals) : <h4>loading...</h4>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
