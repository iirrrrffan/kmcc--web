import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import { adminInstance } from '../../axiosInstance/Axios';
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

        <div className="min-h-screen bg-green-800 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md p-6 flex justify-center  items-center">
            <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
        HIMAYA ADMIN DASHBOARD
    </h1>

                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate('/settings')}
                        className="text-gray-600 hover:text-gray-800 transition"
                    >
                        <i className="fas fa-cog text-xl"></i>
                    </button>
                    <img
                        src={adminProfile?.photo || 'https://via.placeholder.com/40'}
                        alt="Admin Profile"
                        className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer"
                        onClick={() => navigate('/profile')}
                    />
                </div>
            </header>
    
            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-5 flex items-center justify-between hover:shadow-xl transition">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase">
                                Total Users
                            </h3>
                            <p className="text-3xl font-bold text-gray-800">{totalUsers}</p>
                        </div>
                        <i className="fas fa-users text-4xl text-blue-500"></i>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg shadow-lg p-5 flex items-center justify-between hover:shadow-xl transition">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase">
                                Expired Users
                            </h3>
                            <p className="text-3xl font-bold text-gray-800">{expiredUsers}</p>
                        </div>
                        <i className="fas fa-user-slash text-4xl text-red-500"></i>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg shadow-lg p-5 flex items-center justify-between hover:shadow-xl transition">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500 uppercase">
                                Active Users
                            </h3>
                            <p className="text-3xl font-bold text-gray-800">{remainingUsers}</p>
                        </div>
                        <i className="fas fa-user-check text-4xl text-green-500"></i>
                    </div>
                </div>
    
                {/* Graph Section */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                        User Statistics
                    </h3>
                    <div className="w-full h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Graph Placeholder</span>
                    </div>
                </div>
            </main>
        </div>
    </>
    
    
    
    );
};

export default Dashboard;