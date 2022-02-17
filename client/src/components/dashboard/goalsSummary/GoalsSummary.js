import React from 'react';
import GoalCard from '../../shared/GoalCard/GoalCard';
import './GoalsSummary.scss';

const GoalsSummary = ({ goals }) => {
  const genGoalCards = (goalArr) => {
    return goalArr.map((goal, idx) => goal.current_amount < goal.total_amount && <GoalCard key={idx} {...goal} />);
  };

  return (
    <div className="goals-sum">
      <div className="goals-sum__title mb-2">
        <h5>Your Financial Goals</h5>
      </div>
      <div className="goals-sum__cards-container flex">{goals.length ? genGoalCards(goals) : <h4>loading...</h4>}</div>
    </div>
  );
};

export default GoalsSummary;
