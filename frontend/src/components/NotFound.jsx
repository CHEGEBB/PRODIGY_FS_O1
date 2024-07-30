// NotFound.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../sass/NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <button onClick={() => navigate('/')}>Go to Dashboard</button>
      </div>
    </div>
  );
};

export default NotFound;