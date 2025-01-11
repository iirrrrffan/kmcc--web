import React from "react";
import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const location = useLocation();
  const user = location.state?.user;

  // List of necessary fields to display
  const necessaryFields = [
    "Name", "iqamaNumber", "MembershipNumber", "CentralCommittee", "SaudiMob",
    "HouseName", "Panchayath", "RoadPlace", "PostOffice", "PinCode", "District",
    "IndiaMob", "Assembly", "Parliament", "AdharNumber", "HimayaStatus", "PaymentStatus",
    "ApprovalStatus", "Nominee", "CreatedBy", "AreaCoordinator", "AreaCoordinatorApprovedComment",
    "CreatedByDate", "ApprovedCentalCommitteeUser", "CentralcommitteeApprovedComment",
    "CentralcommitteeApprovedDate", "Payment", "expiryDate", "email"
  ];

  // Format the date fields
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options); // DD/MM/YYYY format
  };

  if (!user) {
    return (
      <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
        <p className="text-gray-600">No user data found. Please check again.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
        <ul className="divide-y divide-gray-300">
          {necessaryFields.map((key, index) => (
            <li key={index} className="flex justify-between py-2">
              <span className="font-semibold text-gray-700">{key}:</span>
              <span className="text-gray-600">
                {["CreatedByDate", "CentralcommitteeApprovedDate", "expiryDate"].includes(key)
                  ? formatDate(user[key])
                  : user[key] || "N/A"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
