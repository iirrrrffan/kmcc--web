import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SideBar from '../components/Sidebar';
import { adminInstance } from '../../axiosInstance/Axios';

const UpdateProfile = () => {
    const Nvgt = useNavigate();
    const adminId = localStorage.getItem('adminId');
    const fileInputRef = useRef(null);

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [newImage, setNewImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);


    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewImage(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    useEffect(() => {
        const fetchProfile = async () => {
            if (!adminId) {
                toast.error('No admin data found. Please log in again.');
                return;
            }
            try {
                const response = await adminInstance.get(`/admin/${adminId}`);
                if (response.status === 200) {
                    const adminData = response.data.admin;
                    setNewName(adminData.name);
                    setNewEmail(adminData.email);
                    setNewPhone(adminData.phone);
                    setNewImage(adminData.photo);
                    setPreviewImage(adminData.photo);
                }
            } catch (error) {
                console.log('Error fetching admin profile:', error);
                toast.error('Failed to load profile data.');
            }
        };

        fetchProfile();
    }, [adminId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', newName);
            formData.append('email', newEmail);
            formData.append('phone', newPhone);
            if (newImage) formData.append('photo', newImage);

            await adminInstance.patch(`/admin/profile/${adminId}`, formData);

            toast.success('Profile Updated Successfully');
            Nvgt('/admin/dashboard');
        } catch (error) {
            console.error('Error updating profile:', error.response?.data || error.message);
            toast.error('Failed to update profile. Please try again.');
        }
    };

    return (
        <>
            <SideBar />
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-b bg-green-800 py-10 overflow-x-hidden">
                <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl" onSubmit={handleSubmit}>
                    <h2 className="text-3xl font-semibold text-center text-green-800 mb-6 font-serif">Update Your Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Enter your full name"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 text-sm font-mono"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="relative group">
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                {previewImage ? (
                                    <img
                                        src={previewImage}
                                        alt="Profile Preview"
                                        onClick={handleImageClick}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-green-400 cursor-pointer group-hover:opacity-80 transition duration-300"
                                    />
                                )
                                    : (
                                        <img
                                            src="https://via.placeholder.com/50"
                                            alt="Default Profile"
                                            onClick={handleImageClick}
                                            className="w-24 h-24 rounded-full object-cover border-4 border-gray-400 cursor-pointer group-hover:opacity-80 transition duration-300"
                                        />
                                    )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 text-sm font-mono"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-600 text-sm font-medium mb-2" htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-300 text-sm font-mono"
                                value={newPhone}
                                onChange={(e) => setNewPhone(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-end space-x-2 md:col-span-2">
                            <button
                                type="button"
                                className="bg-red-300 text-white py-2 px-6 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline transition duration-300 text-sm"
                                onClick={() => Nvgt('/admin/dashboard')}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-green-700 text-white py-2 px-6 rounded-full hover:bg-green-800 focus:outline-none focus:shadow-outline transition duration-300 text-sm"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateProfile;
