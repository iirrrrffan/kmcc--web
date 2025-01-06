import React, { useState } from 'react';
import { FaBars, FaUsers, FaTachometerAlt, FaClock, FaSignOutAlt, FaPlus, FaUserShield,FaEnvelope } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SideBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const Nvgt = useNavigate()

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken')
        localStorage.removeItem('adminId')
        Nvgt('/adminlogin')
        toast.success(`Logout Success`)
    };

    return (
        <div>
            <button
                onClick={toggleDrawer}
                className="p-2 text-white bg-green-900 fixed top-4 left-4 z-50 rounded-full"
            >
                <FaBars />
            </button>
            <div
                className={`fixed top-0 left-0 w-64 h-screen bg-gradient-to-b from-green-800 to-green-700 text-white flex flex-col shadow-lg transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="p-4 text-2xl font-bold border-b border-green-600 flex items-center justify-center">
                    Admin
                </div>
                <nav className="flex-grow p-4">
                    <ul>
                        <li className="mb-4">
                            <NavLink to="/admin/dashboard" className="flex items-center hover:bg-green-700 hover:shadow-md transition-all duration-300 rounded p-2">
                                <FaTachometerAlt className="mr-3 text-lg" />
                                <span className="text-lg">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <NavLink to="/admin/users" className="flex items-center hover:bg-green-700 hover:shadow-md transition-all duration-300 rounded p-2">
                                <FaUsers className="mr-3 text-lg" />
                                <span className="text-lg">Users List</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <NavLink to='/admin/adduser' className="flex items-center hover:bg-green-700 hover:shadow-md transition-all duration-300 rounded p-2">
                                <FaPlus className="mr-3 text-lg" />
                                <span className="text-lg">Add User</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <NavLink to="/expiredusers" className="flex items-center hover:bg-green-700 hover:shadow-md transition-all duration-300 rounded p-2">
                                <FaClock className="mr-3 text-lg" />
                                <span className="text-lg">Expired Users</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <NavLink
                                to="/admin/pending-requests"
                                className="flex items-center hover:bg-green-700 hover:shadow-md transition-all duration-300 rounded p-2"
                            >
                                <FaEnvelope className="mr-3 text-lg" />
                                <span className="text-lg">Admin Requests</span>
                            </NavLink>
                        </li>

                        <li className="mb-6">
                            <NavLink to="/admins" className="flex items-center hover:bg-green-700 hover:shadow-md transition-all duration-300 rounded p-2">
                                <FaUserShield className="mr-3 text-lg" />
                                <span className="text-lg">Admin List</span>
                            </NavLink>
                        </li>
                        <li className="mb-6">
                            <button
                                onClick={handleLogout}
                                className="flex items-center hover:bg-green-700 hover:shadow-md transition-all duration-300 rounded p-2 w-full"
                            >
                                <FaSignOutAlt className="mr-3 text-lg" />
                                <span className="text-lg">Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="p-4 border-t border-green-600 text-center">
                    &copy; KMCC
                </div>
            </div>
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-green-500 opacity-50 z-30"
                    onClick={toggleDrawer}
                ></div>
            )}
        </div>
    );
};

export default SideBar;
