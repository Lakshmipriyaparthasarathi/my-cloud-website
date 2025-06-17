import React, { useState } from 'react';
import './LoginForm.css'; // optional styling

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set your fixed credentials here
    const allowedEmail = 'brainbuzz@game.com';
    const allowedPassword = 'buzz123';

    if (email === allowedEmail && password === allowedPassword) {
      onLogin(); // Allow login and go to game
    } else {
      alert("🚫 Invalid email or password! Access denied.");
    }
  };

  return (
    <div className="login-container">
      <h2>🔐 Welcome to BrainBuzz</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Enter Game 🎮</button>
      </form>
    </div>
  );
};

export default LoginForm;
