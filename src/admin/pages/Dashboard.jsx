import React from 'react';
import SideBar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
            <SideBar />
            <div className="min-h-screen bg-green-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
                    <h1 className="text-3xl font-bold text-green-600 text-center mb-6">KMCC Admin Dashboard</h1>
                    <p className="text-center text-gray-600">Welcome to the dashboard. Manage to users and settings here.</p>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
