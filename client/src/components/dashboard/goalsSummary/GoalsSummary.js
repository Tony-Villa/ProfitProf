import React from 'react';
import GoalCard from '../../shared/GoalCard/GoalCard';

const GoalsSummary = ({ goals }) => {
  const genGoalCards = (goalArr) => {
    return goalArr.map((goal, idx) => <GoalCard key={idx} {...goals} />);
  };

  return (
    <div>
      <div className="test">
        <p>hello</p>
      </div>
      <div className="goals-sum flex">{goals.length ? genGoalCards(goals) : <h4>loading...</h4>}</div>
    </div>
  );
};

export default GoalsSummary;
