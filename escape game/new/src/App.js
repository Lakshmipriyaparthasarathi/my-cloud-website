import React, { useState } from 'react';
import LoginPage from './LoginPage';
import PuzzleRoom from './puzzleRoom';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <div>
      {!userInfo ? (
        <LoginPage onLogin={setUserInfo} />
      ) : (
        <PuzzleRoom username={userInfo.username} age={userInfo.age} />
      )}
    </div>
  );
}

export default App;
