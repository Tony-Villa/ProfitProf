import React, { useContext } from 'react';
import AuthForm from '../../components/auth/AuthForm/AuthForm';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import './Home.scss';
import logo from '../../assets/logo.png';

const Home = ({ isUser, setAuth }) => {
  const { user } = useContext(UserContext);

  console.log(user?.username);
  console.log(isUser);
  return (
    <div className="splash">
      <div className="splash_title_div">
        <div className="splash_title">
          <img src={logo}></img>
        </div>

        <div className="splash_nav">
          <Link to="/" className="splah_nav_link">
            <h6>How It Works</h6>
          </Link>
          <Link to="/" className="splah_nav_link">
            <h6>Pricing</h6>
          </Link>
          <Link to="/" className="splah_nav_link">
            <h6>Resources</h6>
          </Link>
        </div>
      </div>

      <div className="splash_main_div">
        <div className="splash_main_left">
          <div className="splash__title-container">
            <h2>ProfitProf</h2>
            <h3 className="splash__title">Managing financial goals has never been easier</h3>
          </div>
        </div>

        <div className="splash_main_right">
          <AuthForm setAuth={setAuth} />
        </div>
      </div>
    </div>
  );
};

export default Home;
