import './App.scss';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

const ProtectedRoute = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth handleLogin={handleLogin} />} />
          <Route path="/dashboard" element={<Dashboard handleLogout={handleLogout} />} />

          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;