import React, { useState } from 'react';
import './Password.css';
import FamilyTree from '../FamilyTree/FamilyTreePage';

function PasswordPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'mySecretPassword') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  return (
    <div >
      {!isAuthenticated ? (
        <div className="password-page">
        <form onSubmit={handleSubmit} className="password-form">
          <h1 className="header">Enter Password</h1>
          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter password"
            required
            className="password-input"
          />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        </div>
      ) : (
        <div >
          <FamilyTree/>
        </div>
      )}
    </div>
  );
}

export default PasswordPage;
