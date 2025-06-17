import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import GameBoard from './components/GameBoard';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <GameBoard /> : <LoginForm onLogin={() => setIsLoggedIn(true)} />}
    </div>
  );
};

export default App;
