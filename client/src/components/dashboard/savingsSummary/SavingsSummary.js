import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import './SavingsSummary.scss';

const SavingsSummary = ({ income }) => {
  const [savings, setSavings] = useState(null);
  const { user } = useContext(UserContext);

  return (
    <div className="save-sum ">
      <h5 classNames="save-sum__greeting text-bold">Hi, {user.first_name}</h5>
      <p className="mt-1">Your Current Savings</p>
      {income[0]?.total_saved && (
        <h3 className="save-sum__amount">${(Math.round(income[0].total_saved * 100) / 100).toLocaleString()}</h3>
      )}
    </div>
  );
};

export default SavingsSummary;
