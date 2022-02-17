import React, { useState } from 'react';
import './GoalCard.scss';
import Hawaii from '../../../assets/thumbnails/hawaii.png';
import Car from '../../../assets/thumbnails/car.png';
import Loan from '../../../assets/thumbnails/loan.png';
import Computer from '../../../assets/thumbnails/computer.png';
import Trash from '../../../assets/icons/trash.png';

const GoalCard = ({ goal_subtype, description, current_amount, total_amount, monthly_cap, id, deleteReview }) => {
  const [currId, setCurrID] = useState('0');

  const thumbnailPicker = {
    vacation: Hawaii,
    'loan payment': Loan,
    'car purchase': Car,
    'other goal': Computer,
  };

  const getPercent = (current, total) => {
    return Math.round((current / total) * 100);
  };

  //   const getRemainingMonths = (current, total, monthly) => {
  //     const init = 1;
  //     const remaining = total - current;

  //     while (monthly * init < remaining) {
  //       init++;
  //     }

  //     return init;
  //   };

  //   const remainingMonths = getRemainingMonths(current_amount, total_amount, monthly_cap);

  const randomNumber = Math.floor(Math.random() * 5) + 4;
  const currentPercent = getPercent(current_amount, total_amount);

  return (
    <div className="goal-card flex">
      <div className="goal-card__left flex">
        <img src={thumbnailPicker[goal_subtype]} alt="" />
      </div>
      <div className="goal-card__right ml-1">
        <div className="goal-card__content flex">
          <h6 className="goal-card__title">{description}</h6>
          <div className="goal-card__progress-bar">
            <div className="goal-card__progress-fill" style={{ width: currentPercent + '%' }}></div>
          </div>
          <div className="goal-card__amounts">
            <p>
              ${current_amount} out of ${total_amount}
            </p>
          </div>
          <div className="goal-card__months-left">
            {current_amount < total_amount ? <p>{randomNumber} months to go!</p> : <p></p>}
          </div>
          <div className="goal-card__options flex">
            <div className="goal-card__on-track">
              {current_amount < total_amount ? (
                <span className="subtitle">On Schedule</span>
              ) : (
                <span className="subtitle">Achieved Oct 2021</span>
              )}
            </div>
            {/* <button className="goal-card__btn-delete" onClick={deleteReview(currId)}>
              <img src={Trash} alt="" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalCard;
