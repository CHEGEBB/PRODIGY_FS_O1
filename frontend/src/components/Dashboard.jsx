import React, { useState } from 'react';
import '../sass/Dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCalendar, faChartBar, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const MinimalistDashboard = ({ handleLogout }) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="content">
            <h2>Welcome to your dashboard</h2>
            <p>Here's a quick overview of your recent activity:</p>
            <ul>
              <li>3 new appointments scheduled</li>
              <li>5 patient records updated</li>
              <li>2 new messages in your inbox</li>
            </ul>
          </div>
        );
      case 'patients':
        return (
          <div className="content">
            <h2>Patients</h2>
            <p>Recent patients:</p>
            <ul>
              <li>John Doe - Last visit: 2 days ago</li>
              <li>Jane Smith - Last visit: 1 week ago</li>
              <li>Mike Johnson - Last visit: 3 days ago</li>
            </ul>
          </div>
        );
      case 'appointments':
        return (
          <div className="content">
            <h2>Appointments</h2>
            <p>Upcoming appointments:</p>
            <ul>
              <li>Today, 2:00 PM - Annual Check-up</li>
              <li>Tomorrow, 10:30 AM - Follow-up Consultation</li>
              <li>Friday, 3:15 PM - New Patient Intake</li>
            </ul>
          </div>
        );
      case 'analytics':
        return (
          <div className="content">
            <h2>Analytics</h2>
            <p>Key metrics this month:</p>
            <ul>
              <li>Total patients seen: 127</li>
              <li>Average appointment duration: 35 minutes</li>
              <li>Patient satisfaction rate: 94%</li>
            </ul>
          </div>
        );
      case 'settings':
        return (
          <div className="content">
            <h2>Settings</h2>
            <p>Quick settings:</p>
            <ul>
              <li>Notification preferences</li>
              <li>Account security</li>
              <li>Language and region</li>
            </ul>
          </div>
        );
      default:
        return <div className="content">Welcome to your dashboard</div>;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">MediDash</div>
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