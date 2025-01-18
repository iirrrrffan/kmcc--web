import React, { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar';
import { adminInstance } from '../../axiosInstance/Axios';
import { approveAdminRequest, rejectAdminRequest } from '../request-api/PendingRequest';

const PendingAdmins = () => {
    const [pendingAdmins, setPendingAdmins] = useState([]);

    const fetchPendingAdmins = async () => {
        try {
            const response = await adminInstance.get('/admin/pending-requests');
            setPendingAdmins(response.data.data);
        } catch (error) {
            console.error('Error fetching pending admins:', error);
        }
    };

    useEffect(() => {
        fetchPendingAdmins();
    }, []);

    const handleApprove = async (id) => {
        await approveAdminRequest(id);
        fetchPendingAdmins();
    };

    const handleReject = async (id) => {
        await rejectAdminRequest(id);
        fetchPendingAdmins();
    };

    return (
        <>
            <SideBar />
            <div className="p-6 bg-white min-h-screen">
                <div className="max-w-screen-xl mx-auto">
                    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white">
                        <table className="min-w-full bg-white text-sm text-gray-600 table-auto sm:rounded-lg">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="px-6 py-3 text-center">Name</th>
                                    <th className="px-6 py-3 text-center">Email</th>
                                    <th className="px-6 py-3 text-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(pendingAdmins) && pendingAdmins.length > 0 ? (
                                    pendingAdmins.map((admin) => (
                                        <tr key={admin._id} className="border-b border-gray-100 hover:bg-gray-50 text-center">
                                            <td className="px-6 py-4">{admin.name}</td>
                                            <td className="px-6 py-4">{admin.email}</td>
                                            <td className="px-6 py-4 text-center">
                                                <button
                                                    className="bg-green-600 text-white px-4 py-2 rounded-md mr-4 mb-4 sm:mb-0 hover:bg-green-800 focus:outline-none transition-colors text-xs sm:text-sm md:text-base"
                                                    onClick={() => handleApprove(admin._id)}
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-4 sm:mr-0 hover:bg-red-600 focus:outline-none transition-colors text-xs sm:text-sm md:text-base"
                                                    onClick={() => handleReject(admin._id)}
                                                >
                                                    Reject
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center py-4">No pending admin requests found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PendingAdmins;
