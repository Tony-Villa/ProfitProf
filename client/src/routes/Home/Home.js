import React, { useContext } from 'react';
import AuthForm from '../../components/auth/AuthForm/AuthForm';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';

const Home = ({ isUser, setAuth }) => {
  const { user } = useContext(UserContext);

  console.log(user?.username);
  console.log(isUser);
  return (
    <div className='home'>
      <div className='splash_title_div'>
        <div className='splash_title'>
          <h1>ProfitProf</h1>
        </div>
        

        <div className='splash_nav'>
          <Link to="howitworks" className='splah_nav_link'>
            <h2>How It Works</h2>
          </Link>
          <Link to="pricing" className='splah_nav_link'>
            <h2>Pricing</h2>
          </Link>
          <Link to="resources" className='splah_nav_link'>
            <h2>Resources</h2>
          </Link>
        </div>
      </div>

    <div className='splash_main_div'>

      <div className='splash_main_left'>
        <h1>Managing financial goals has never been easier</h1>
      </div>
      

      <div className='splash_main_right'>
        <AuthForm setAuth={setAuth} />
      </div>
    </div>



      
    </div>
  );
};

export default Home;
