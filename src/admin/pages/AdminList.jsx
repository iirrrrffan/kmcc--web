import React, { useEffect, useState } from 'react';
import SideBar from '../components/Sidebar';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { adminInstance } from '../../axiosInstance/Axios';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await adminInstance.get('/admin/all-admins');

                const adminData = Array.isArray(response.data.data) ? response.data.data : [];
                setAdmins(adminData);

            } catch (error) {
                console.error('Error fetching admin list:', error);
                setAdmins([]);
            }
        };

        fetchAdmins();
    }, []);

    const handleDelete = async (adminId) => {
        try {
            await adminInstance.delete(`/admin/${adminId}`);
            setAdmins((prevAdmins) => prevAdmins.filter((admin) => admin._id !== adminId));
            toast.success('Admin deleted successfully');
        } catch (error) {
            console.error('Error deleting admin:', error);
            toast.error('Failed to delete admin');
        }
    };

    return (
        <div className="min-h-screen flex bg-green-50">
            <SideBar />
            <div className="flex-1 p-8">
                <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr className="bg-green-700 text-white text-center">
                                <th className="p-4 font-semibold">#</th>
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Email</th>
                                <th className="p-4 font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(admins) && admins.length > 0 ? (
                                admins.map((admin, index) => (
                                    <tr key={admin._id} className="border-b hover:bg-green-50 font-sans text-center">
                                        <td className="p-4">{index + 1}</td>
                                        <td className="p-4">{admin.name}</td>
                                        <td className="p-4">{admin.email}</td>
                                        <td className="p-4">
                                            <button
                                                className="text-red-500 hover:text-red-700 transition-colors"
                                                onClick={() => handleDelete(admin._id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center text-gray-500 p-4">No admins available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminList;