import './reset.scss';
import './variables.scss';
import './app.scss';
import './media.scss';

import AuthForm from './components/auth/AuthForm/AuthForm';

function App() {
  return (
    <div className="App">
      <h1>Hello, Profit Prof</h1>
      <AuthForm />
    </div>
  );
}

export default App;
