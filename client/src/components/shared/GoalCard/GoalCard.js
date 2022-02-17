import React from 'react';
import './GoalCard.scss';
import Hawaii from '../../../assets/thumbnails/hawaii.png';
import Car from '../../../assets/thumbnails/car.png';
import Loan from '../../../assets/thumbnails/loan.png';

const GoalCard = ({ goal_subtype }) => {
  const thumbnailPicker = {
    vacation: Hawaii,
    'loan repayment': Loan,
    'car purchase': Car,
  };

  return (
    <div className="goal-card flex">
      <div className="goal-card__left">
        <img src={thumbnailPicker[goal_subtype]} alt="" />
      </div>
      <div className="goal-card__right">{goal_subtype}</div>
    </div>
  );
};

export default GoalCard;
