import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import { adminInstance } from '../../axiosInstance/admin';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [expiredUsers, setExpiredUsers] = useState(0);
    const [remainingUsers, setRemainingUsers] = useState(0);
    const [adminProfile, setAdminProfile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAdminProfile = async () => {
            const adminId = localStorage.getItem('adminId');
            try {
                if (adminId) {
                    const response = await adminInstance.get(`/admin/${adminId}`);
                    setAdminProfile(response.data.admin);
                }
            } catch (error) {
                console.error('Error fetching admin profile:', error);
            }
        };
        const fetchTotalUsers = async () => {
            try {
                const response = await adminInstance.get('/admin/users');
                setTotalUsers(response.data.totalUsers);
            } catch (error) {
                console.error('Error fetching total users:', error);
            }
        };

        const fetchExpiredProfilesCount = async () => {
            try {
                const response = await adminInstance.get('/admin/expired/users');
                setExpiredUsers(response.data.expiredProfilesCount);
            } catch (error) {
                console.error('Error fetching expired profiles count:', error);
            }
        };

        const fetchRemainingUsersCount = async () => {
            try {
                const response = await adminInstance.get('/admin/remainingusers');
                setRemainingUsers(response.data.remainingUsersCount);
            } catch (error) {
                console.error('Error fetching remaining users count:', error);
            }
        };

        fetchAdminProfile();
        fetchTotalUsers();
        fetchExpiredProfilesCount();
        fetchRemainingUsersCount();
    }, []);

    return (
        <>
            <SideBar />
            <div className="min-h-screen bg-green-50 flex items-start">
                <div className="bg-white p-6 rounded-lg shadow-lg w-full mx-4 my-6 lg:my-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="text-center w-full">
                            <h1 className="text-3xl font-bold text-green-600 font-serif mb-4">
                                KMCC ADMIN DASHBOARD
                            </h1>
                            <p className="text-gray-600">
                                Welcome to the dashboard. Manage users and settings here.
                            </p>
                        </div>
                        <img
                            src={adminProfile?.photo || 'https://via.placeholder.com/50'}
                            alt="Admin Profile"
                            className="w-20 h-20 rounded-full cursor-pointer border-2 border-gray-300 ml-auto"
                            onClick={() => navigate('/profile')}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <h2 className="text-xl font-semibold text-blue-600">Total Users</h2>
                            <p className="text-3xl font-bold text-blue-800">{totalUsers}</p>
                        </div>

                        <div className="bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <h2 className="text-xl font-semibold text-red-600">Expired Users</h2>
                            <p className="text-3xl font-bold text-red-800">{expiredUsers}</p>
                        </div>

                        <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <h2 className="text-xl font-semibold text-green-600">Active Users</h2>
                            <p className="text-3xl font-bold text-green-800">{remainingUsers}</p>
                        </div>
                    </div>

                    {/* Placeholder for Graph */}
                    <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600">Chart Goes Here</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;