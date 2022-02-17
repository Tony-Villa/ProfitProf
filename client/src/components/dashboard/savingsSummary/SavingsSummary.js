import React, { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import './SavingsSummary.scss';

const SavingsSummary = ({ income }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="save-sum ">
      <h5 classNames="save-sum__greeting text-bold">Hi, {user.first_name}</h5>
    </div>
  );
};

export default SavingsSummary;
