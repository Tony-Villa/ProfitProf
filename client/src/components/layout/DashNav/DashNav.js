import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './DashNav.scss';

const DashNav = ({ logout }) => {
  const navigate = useNavigate();

  return (
    <nav className="dash-nav">
      <div className="dash-nav__neg-border"></div>
      <div className="dash-nav__logo-container"></div>
      <ul className="dash-nav__link-container">
        <li className="dash-nav__link">
          <Link to="/dashboard">OVERVIEW</Link>
        </li>
        <li className="dash-nav__link">BUDGET</li>
        <li className="dash-nav__link">
          <Link to="/goals">GOALS</Link>
        </li>
        <li className="dash-nav__link">PROFILE</li>
        <button className="btn-signout" onClick={(e) => logout(e)}>
          Sign Out
        </button>
      </ul>
    </nav>
  );
};

export default DashNav;
