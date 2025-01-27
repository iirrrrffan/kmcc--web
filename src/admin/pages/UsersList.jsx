import React, { useState, useEffect } from 'react';
import { adminInstance } from '../../axiosInstance/Axios';
import SideBar from '../components/Sidebar';
import { UserDetailsModal } from '../components/Modal';
import { FiEdit, FiTrash, FiEye } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
    
const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const Nvgt = useNavigate()

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await adminInstance.get('/admin/user-profile');
                setUsers(response.data.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchFilteredUsers = async () => {
            if (searchQuery) {
                try {
                    const response = await adminInstance.get('/admin/search-users', {
                        params: { query: searchQuery }
                    });
                    setUsers(response.data.users);
                } catch (error) {
                    console.error("Error fetching filtered users:", error);
                }
            } else {
                const response = await adminInstance.get('/admin/user-profile');
                setUsers(response.data.data);
            }
        };

        fetchFilteredUsers();
    }, [searchQuery]);

    const handleViewDetails = (user) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };


    const handleDelete = async (userId) => {
        try {
            await adminInstance.delete(`/admin/user/${userId}`);
            setUsers(users.filter(user => user._id !== userId));
            toast.success(`User deleted successfully`);
        } catch (error) {
            toast.error("Error deleting user:", error);
        }
    };

    return (
        <>
            <div className='bg-green-700 min-h-screen'>
                <SideBar />
                <div className="container mx-auto px-4 py-8">
                <div className="flex justify-center mb-8">
    <input
        type="text"
        placeholder="Search by name or iqama number"
        className="w-1/2 sm:w-1/3 md:w-1/4 p-3 border border-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md transition duration-300 placeholder-gray-500 text-gray-700"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
    />
</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-9">
                        {users?.map((user) => (
                            <div key={user._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{user.Name}</h2>
                                    <p className="text-gray-600 text-sm mb-2">{user.email}</p>
                                    <div className="mt-4 flex w-full justify-between items-center">
                                        <div
                                            className="text-green-500 p-4 rounded-full transition flex-grow cursor-pointer hover:green-100 hover:scale-110"
                                            onClick={() => handleViewDetails(user)}
                                        >
                                            <FiEye size={22} />
                                        </div>
                                        <div className="flex gap-4 ml-4">
                                            <button
                                                className="text-gray-500 hover:text-gary-600"
                                                onClick={() => Nvgt(`/edit/${user._id}`)}
                                            >
                                                <FiEdit size={20} />
                                            </button>
                                            <button
                                                className="text-red-500 hover:text-red-600"
                                                onClick={() => handleDelete(user._id)}
                                            >
                                                <FiTrash size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {isModalOpen && <UserDetailsModal user={selectedUser} onClose={closeModal} />}
            </div>
        </>
    );
};

export default UsersList;
