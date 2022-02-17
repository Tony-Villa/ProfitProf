import React from 'react';

const DashNav = ({ logout }) => {
  return (
    <nav className="dash">
      <div className="dash__logo-container"></div>
      <ul className="dash__link-container">
        <li className="dash__link">OVERVIEW</li>
        <li className="dash__link">BUDGET</li>
        <li className="dash__link">GOALS</li>
        <li className="dash__link">PROFILE</li>
        <button className="btn-signout" onClick={(e) => logout(e)}>
          Sign Out
        </button>
      </ul>
    </nav>
  );
};

export default DashNav;
