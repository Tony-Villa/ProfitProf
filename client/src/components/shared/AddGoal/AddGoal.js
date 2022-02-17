import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { ReloadContext } from '../../../Context/ReloadContext';
import { UserContext } from '../../../Context/UserContext';
import './AddGoal.scss';

const AddGoal = ({}) => {
  const { isReload, setIsReload } = useContext(ReloadContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    user_id: user.id,
    goal_type: 'short term',
    goal_subtype: 'other goal',
    description: '',
    total_amount: 4000,
    monthly_cap: 500,
    current_amount: 250,
    due_date: '2022-09-25',
  });

  const { user_id, goal_type, goal_subtype, description, total_amount, monthly_cap, due_date, current_amount } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { user_id, goal_type, goal_subtype, description, total_amount, monthly_cap, current_amount, due_date };

    try {
      const res = await fetch(`https://profitprof.herokuapp.com/v1/goals/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const parsedRes = await res.json();

      setIsReload(!isReload);
      navigate('/dashboard');

      //   handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="goal-form">
      <form className="goal-form__form flex" onSubmit={onSubmitForm} autoComplete="off">
        <input
          className="input-form"
          type="hidden"
          name="user_id"
          placeholder="user_id"
          value={user_id}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-form"
          type="hidden"
          name="due_date"
          placeholder="due_date"
          value={due_date}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-form"
          type="hidden"
          name="goal_type"
          placeholder="goal_type"
          value={goal_type}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-form"
          type="hidden"
          name="goal_subtype"
          placeholder="goal_subtype"
          value={goal_subtype}
          onChange={(e) => onChange(e)}
        />
        <select>
          <option value="credit card payment">Pay Credit Card</option>
          <option value="vacation">Vacation</option>
          <option value="other goal">Other Goal</option>
        </select>
        <label for="total_amount">Amount Needed</label>
        <input
          className="input-form"
          type="number"
          name="total_amount"
          placeholder="250"
          value={total_amount}
          onChange={(e) => onChange(e)}
        />
        <label for="monthly_cap">Monthly Contribution</label>
        <input
          className="input-form"
          type="number"
          name="monthly_cap"
          placeholder="250"
          value={monthly_cap}
          onChange={(e) => onChange(e)}
        />
        <label for="monthly_cap">Initial Investment</label>
        <input
          className="input-form"
          type="number"
          name="current_amount"
          placeholder="current_amount"
          value={current_amount}
          onChange={(e) => onChange(e)}
        />

        <label for="monthly_cap">Goal Title</label>
        <input
          className="input-form"
          type="text"
          name="description"
          placeholder="Buy new shoes"
          value={description}
          onChange={(e) => onChange(e)}
        />

        <button className="btn submit btn-search mt-1 mb-1">Submit</button>
      </form>
    </div>
  );
};

export default AddGoal;
