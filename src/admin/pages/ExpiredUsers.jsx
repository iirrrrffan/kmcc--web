import React, { useEffect, useState } from 'react';
import { adminInstance } from '../../axiosInstance/admin';
import SideBar from '../components/Sidebar';

const ExpiredUsers = () => {
    const [expiredUsers, setExpiredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExpiredUsers = async () => {
            try {
                const response = await adminInstance.get('/admin/profiles/sorted');
                setExpiredUsers(response.data.profiles);
            } catch (error) {
                setError('Failed to fetch expired profiles');
            } finally {
                setLoading(false);
            }
        };

        fetchExpiredUsers();
    }, []);

    return (
        <>
            <SideBar />
            <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-600 py-10 flex items-center justify-center">
                <div className="max-w-7xl w-full bg-white p-8 rounded-3xl shadow-2xl">
                    <h1 className="text-4xl font-bold text-center text-green-800 mb-8 font-serif">Expired Users</h1>
                    {loading ? (
                        <div className="flex justify-center items-center space-x-2">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-4 border-green-600"></div>
                            <span className="text-xl text-gray-600">Loading...</span>
                        </div>
                    ) : error ? (
                        <p className="text-red-500 text-center text-lg">{error}</p>
                    ) : (
                        <div className="space-y-8">
                            {expiredUsers.length === 0 ? (
                                <p className="text-center text-lg text-gray-600">No expired users found.</p>
                            ) : (
                                <div
                                    className={`${expiredUsers.length > 5 ? 'max-h-96 overflow-y-auto' : ''}`}
                                >
                                    {expiredUsers.map(user => (
                                        <div key={user._id} className="flex items-center justify-between p-6 border-b-2 border-gray-300 rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                                            <div className="flex items-center space-x-4">
                                                <div>
                                                    <p className="text-xl font-mono text-gray-800">{user.Name}</p>
                                                    <p className="text-sm text-gray-500">Expired on: {new Date(user.expiryDate).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <div className="text-gray-600 font-semibold">
                                                {new Date(user.expiryDate).toLocaleDateString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ExpiredUsers;
