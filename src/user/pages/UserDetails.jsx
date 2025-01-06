import React from 'react';

const UserDetails = () => {
  const userDetails = {
    Name: "John Doe",
    Email: "johndoe@example.com",
    "Membership Number": "9876543210",
    "Himaya Status": "Active",
    "Central Committee": "Riyadh Central Committee",
    "Iqama Number": "12345678901",
    "Saudi Mobile": "966512345678",
    "India Mobile": "919876543210",
    "House Name": "Rose Villa",
    Panchayath: "Aluva",
    "Road/Place": "Main Road",
    "Post Office": "Aluva Post Office",
    "Pin Code": "683101",
    District: "Ernakulam",
    Assembly: "Kalamassery",
    Parliament: "Ernakulam",
    "Aadhar Number": "123456789012",
    "Approval Status": "Approved",
    "Payment Status": "Received",
    Nominee: "Jane Doe",
    "Area Coordinator": "Coordinator Name",
    "Created By": "Admin User",
    Payment: "500",
    "Expiry Date": "05/12/2024",
    "Created Date": "05/12/2024",
    "Central Committee Approved Date": "06/12/2024",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">User Details</h1>
        <ul className="divide-y divide-gray-300">
          {Object.entries(userDetails).map(([key, value], index) => (
            <li key={index} className="flex justify-between py-2">
              <span className="font-semibold text-gray-700">{key}:</span>
              <span className="text-gray-600">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
