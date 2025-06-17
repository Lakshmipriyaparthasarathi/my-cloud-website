import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && age) {
      onLogin({ username, age });
    } else {
      alert('Please enter both username and age!');
    }
  };

  return (
    <div className="login-page">
      <h2>🧩 Welcome to the Escape Room!</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
