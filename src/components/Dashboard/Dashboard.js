import React from 'react';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
        <div className="nav__integrate">
            <SideNav/>
            <TopNav/>
        </div>
        </div>
    );
};

export default Dashboard;