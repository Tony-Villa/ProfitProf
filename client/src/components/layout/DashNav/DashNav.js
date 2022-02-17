import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const DashNav = ({ logout }) => {
  const navigate = useNavigate();

  return (
    <nav className="dash">
      <div className="dash__logo-container"></div>
      <ul className="dash__link-container">
        <li className="dash__link">
          <Link to="/dashboard">OVERVIEW</Link>
        </li>
        <li className="dash__link">BUDGET</li>
        <li className="dash__link">
          <Link to="/goals">GOALS</Link>
        </li>
        <li className="dash__link">PROFILE</li>
        <button className="btn-signout" onClick={(e) => logout(e)}>
          Sign Out
        </button>
      </ul>
    </nav>
  );
};

export default DashNav;
