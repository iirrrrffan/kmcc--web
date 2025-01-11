export const UserDetailsModal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-green-400 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl h-auto sm:h-[600px] overflow-hidden flex flex-col">
                <button
                    className="absolute top-4 right-4 text-white hover:text-gray-300"
                    onClick={onClose}
                >
                    <span className="text-3xl">&times;</span>
                </button>
                <div className="text-center text-3xl font-semibold text-black mb-6 font-serif">Profile</div>
                <div className="flex-grow overflow-y-auto scrollbar-hide font-['YourFontFamily']">
                    <div className="flex flex-col sm:flex-row sm:space-x-8">
                        <div className="w-full sm:w-1/2 text-base space-y-3">
                            <div className="space-y-3">
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Name</strong>: <div>{user.Name}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Email</strong>: <div>{user.email}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Membership Number</strong>: <div>{user.MembershipNumber}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Himaya Status</strong>: <div>{user.HimayaStatus}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Central Committee</strong>: <div>{user.CentralCommittee}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Iqama Number</strong>: <div>{user.iqamaNumber}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Saudi Mobile</strong>: <div>{user.SaudiMob}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">India Mobile</strong>: <div>{user.IndiaMob}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">House Name</strong>: <div>{user.HouseName}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Panchayath</strong>: <div>{user.Panchayath}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Road/Place</strong>: <div>{user.RoadPlace}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Post Office</strong>: <div>{user.PostOffice}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Pin Code</strong>: <div>{user.PinCode}</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 text-base space-y-3">
                            <div className="space-y-3">
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">District</strong>: <div>{user.District}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Assembly</strong>: <div>{user.Assembly}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Parliament</strong>: <div>{user.Parliament}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Aadhar Number</strong>: <div>{user.AdharNumber}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Approval Status</strong>: <div>{user.ApprovalStatus}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Payment Status</strong>: <div>{user.PaymentStatus}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Nominee</strong>: <div>{user.Nominee}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Area Coordinator</strong>: <div>{user.AreaCoordinator}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Created By</strong>: <div>{user.CreatedBy}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Payment</strong>: <div>{user.Payment}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Expiry Date</strong>: <div>{new Date(user.expiryDate).toLocaleDateString()}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Created Date</strong>: <div>{new Date(user.CreatedByDate).toLocaleDateString()}</div>
                                </div>
                                <div className="flex">
                                    <strong className="mr-2 w-[180px]">Central Committee Approved Date</strong>: <div>{new Date(user.CentralcommitteeApprovedDate).toLocaleDateString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button
                        className="bg-white text-green-500 py-2 px-8 rounded-full hover:bg-gray-200 transition-colors duration-200 font-semibold"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
