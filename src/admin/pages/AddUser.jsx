import React, { useState } from 'react';
import SideBar from '../components/Sidebar';
import { adminInstance } from '../../axiosInstance/Axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const Nvgt = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        iqamaNumber: '',
        MembershipNumber: '',
        CentralCommittee: '',
        SaudiMob: '',
        HouseName: '',
        Panchayath: '',
        RoadPlace: '',
        PostOffice: '',
        PinCode: '',
        District: '',
        IndiaMob: '',
        Assembly: '',
        Parliament: '',
        AdharNumber: '',
        HimayaStatus: 'Pending',
        PaymentStatus: 'Pending',
        ApprovalStatus: 'Pending',
        Nominee: '',
        CreatedBy: '',
        AreaCoordinator: '',
        AreaCoordinatorApprovedComment: '',
        CreatedByDate: '',
        ApprovedCentalCommitteeUser: '',
        CentralcommitteeApprovedComment: '',
        CentralcommitteeApprovedDate: '',
        Payment: '',
        expiryDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await adminInstance.post('/admin/user-profile', formData);
            toast.success(response.data.message);
            Nvgt('/admin/users');
            setFormData({
                Name: '',
                email: '',
                iqamaNumber: '',
                MembershipNumber: '',
                CentralCommittee: '',
                SaudiMob: '',
                HouseName: '',
                Panchayath: '',
                RoadPlace: '',
                PostOffice: '',
                PinCode: '',
                District: '',
                IndiaMob: '',
                Assembly: '',
                Parliament: '',
                AdharNumber: '',
                HimayaStatus: 'Pending',
                PaymentStatus: 'Pending',
                ApprovalStatus: 'Pending',
                Nominee: '',
                CreatedBy: '',
                AreaCoordinator: '',
                AreaCoordinatorApprovedComment: '',
                CreatedByDate: '',
                ApprovedCentalCommitteeUser: '',
                CentralcommitteeApprovedComment: '',
                CentralcommitteeApprovedDate: '',
                Payment: '',
                expiryDate: ''
            });
        } catch (error) {
            toast.error(error.response?.data?.error || 'An error occurred while creating the profile.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SideBar />
            <div className="min-h-screen bg-green-700 flex justify-center items-center p-6">
                <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-4xl max-h-[90vh] flex flex-col">
                    <h2 className="text-center text-3xl font-semibold text-green-600 mb-6 font-serif">Add User</h2>
                    <form className="overflow-y-auto flex-grow space-y-6">
                        {Object.entries({
                            Name: 'text',
                            email: 'email',
                            iqamaNumber: 'number',
                            MembershipNumber: 'number',
                            CentralCommittee: 'text',
                            SaudiMob: 'number',
                            HouseName: 'text',
                            Panchayath: 'text',
                            RoadPlace: 'text',
                            PostOffice: 'text',
                            PinCode: 'number',
                            District: 'text',
                            IndiaMob: 'number',
                            Assembly: 'text',
                            Parliament: 'text',
                            AdharNumber: 'number',
                            Nominee: 'text',
                            CreatedBy: 'text',
                            AreaCoordinator: 'text',
                            AreaCoordinatorApprovedComment: 'text',
                            CreatedByDate: 'date',
                            ApprovedCentalCommitteeUser: 'text',
                            CentralcommitteeApprovedComment: 'text',
                            CentralcommitteeApprovedDate: 'date',
                            Payment: 'number',
                            expiryDate: 'date'
                        }).map(([field, type], index) => (
                            <div key={index} className="mb-4">
                                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                                    {field.replace(/([A-Z])/g, ' $1')}
                                </label>
                                <input
                                    type={type}
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                    required
                                    placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1')}`}
                                />
                            </div>
                        ))}

                        {['HimayaStatus', 'PaymentStatus', 'ApprovalStatus'].map((field, index) => (
                            <div key={index} className="mb-4">
                                <label htmlFor={field} className="block text-sm font-medium text-gray-700 capitalize">
                                    {field.replace(/([A-Z])/g, ' $1')}
                                </label>
                                <select
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                                >
                                    {field === 'HimayaStatus' && ['Active', 'Inactive', 'Pending'].map(option => <option key={option} value={option}>{option}</option>)}
                                    {field === 'PaymentStatus' && ['Pending', 'Received', 'Completed'].map(option => <option key={option} value={option}>{option}</option>)}
                                    {field === 'ApprovalStatus' && ['Pending', 'Approved', 'Rejected'].map(option => <option key={option} value={option}>{option}</option>)}
                                </select>
                            </div>
                        ))}
                    </form>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full text-white p-3 rounded-md font-bold transition mt-6 ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddUser;
