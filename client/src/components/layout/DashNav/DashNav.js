import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './DashNav.scss';
import overview from '../../../assets/icons/overview.png';
import profile from '../../../assets/icons/profile.png';
import signout from '../../../assets/icons/signout.png';
import budget from '../../../assets/icons/budget.png';
import goals from '../../../assets/icons/goals.png';
import logo from '../../../assets/logo.png';

const DashNav = ({ logout }) => {
  const navigate = useNavigate();

  return (
    <nav className="dash-nav flex">
      <div className="dash-nav__logo-container">
        <img src={logo}></img>
      </div>
      <div className="dash-nav__neg-border"></div>
      <ul className="dash-nav__link-container flex">
        <div className="dash-nav__func-links flex">
          <li className="dash-nav__link">
            <Link to="/dashboard">
              <img src={overview} alt="" />
            </Link>
          </li>
          <li className="dash-nav__link">
            <img src={budget} alt="" />
          </li>
          <li className="dash-nav__link">
            <Link style={{ 'text-decoration': 'none' }} to="/goals">
              <img src={goals} alt="" />
            </Link>
          </li>
          <li className="dash-nav__link">
            <img src={profile} alt="" />
          </li>
        </div>
        <button className="btn-signout" onClick={(e) => logout(e)}>
          <img src={signout} alt="" />
        </button>
      </ul>
    </nav>
  );
};

export default DashNav;
