import React, { useState } from 'react';
import '../sass/Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar, faChartBar, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const MinimalistDashboard = ({ handleLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <div className="content">Welcome to your dashboard</div>;
      case 'patients':
        return <div className="content">Patients section</div>;
      case 'appointments':
        return <div className="content">Appointments section</div>;
      case 'analytics':
        return <div className="content">Analytics section</div>;
      case 'settings':
        return <div className="content">Settings section</div>;
      default:
        return <div className="content">Welcome to your dashboard</div>;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">Logo</div>
        <nav>
          <ul>
            <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
            <li className={activeTab === 'patients' ? 'active' : ''} onClick={() => setActiveTab('patients')}>
              <FontAwesomeIcon icon={faUser} /> Patients
            </li>
            <li className={activeTab === 'appointments' ? 'active' : ''} onClick={() => setActiveTab('appointments')}>
              <FontAwesomeIcon icon={faCalendar} /> Appointments
            </li>
            <li className={activeTab === 'analytics' ? 'active' : ''} onClick={() => setActiveTab('analytics')}>
              <FontAwesomeIcon icon={faChartBar} /> Analytics
            </li>
            <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
              <FontAwesomeIcon icon={faCog} /> Settings
            </li>
            <li onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </li>
          </ul>
        </nav>
      </aside>
      <main className="content-area">
        {renderContent()}
      </main>
    </div>
  );
};

export default MinimalistDashboard;
