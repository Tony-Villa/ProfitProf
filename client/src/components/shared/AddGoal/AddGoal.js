import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { ReloadContext } from '../../../Context/ReloadContext';
import { UserContext } from '../../../Context/UserContext';
import './AddGoal.scss';

const AddGoal = ({ closeModal }) => {
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
      <div className="goal-form__titles"></div>
      <button
        className="goal-form__close-btn"
        onClick={() => {
          closeModal(false);
        }}
      >
        X
      </button>

      <h5>Set A Goal</h5>
      <hr />
      <div className="goal-form__content ">
        <form className="goal-form__form flex" onSubmit={onSubmitForm} autoComplete="off">
          <div className="goal-form__left flex">
            <div className="full-width">
              <label htmlFor="">Terms</label>
            </div>
            <select className="goal-form__select-lg">
              <option value="short term">Short Term</option>
              <option value="mid term">Mid Term</option>
              <option value="long term">Long Term</option>
            </select>

            <div className="full-width">
              <label htmlFor="">Choose a goal</label>
            </div>
            <select className="goal-form__select-lg">
              <option value="credit card payment">Pay Credit Card</option>
              <option value="vacation">Vacation</option>
              <option value="other goal">Other Goal</option>
            </select>
            <div className="goal-form__goal-title-container">
              <label for="monthly_cap">Goal Title</label>
              <input
                className="input-form"
                type="text"
                name="description"
                placeholder="Buy new shoes"
                value={description}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="goal-form__right flex">
            <div className="goal-form__date-select flex">
              <select className="goal-form__select-sm">
                <option value="">Jan</option>
                <option value="">Feb</option>
                <option value="">Mar</option>
                <option value="">Apr</option>
                <option value="">May</option>
                <option value="">Jun</option>
                <option value="">Jul</option>
                <option value="">Aug</option>
                <option value="">Sep</option>
                <option value="">Oct</option>
                <option value="">Nov</option>
                <option value="">Dec</option>
              </select>

              <select className="goal-form__select-sm">
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
                <option value="">2025</option>
                <option value="">2026</option>
              </select>
            </div>

            <div className="goal-form__initial-amount flex mb-1">
              <div className="input-label flex">
                <label for="monthly_cap">Monthly Contribution</label>
                <input
                  className="input-form-sm"
                  type="number"
                  name="monthly_cap"
                  placeholder="250"
                  value={monthly_cap}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="input-label flex">
                <label for="monthly_cap">Initial Investment</label>
                <input
                  className="input-form-sm"
                  type="number"
                  name="current_amount"
                  placeholder="current_amount"
                  value={current_amount}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>

            <div className=" input-label amount-needed-container flex">
              <div className="full-width">
                <label for="total_amount">Amount Needed</label>
              </div>
              <input
                className="input-form"
                type="number"
                name="total_amount"
                placeholder="250"
                value={total_amount}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className="btn-container">
              <button className="btn-submit-form mt-2 mb-1">Submit</button>
            </div>
          </div>

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
        </form>
      </div>
    </div>
  );
};

export default AddGoal;
