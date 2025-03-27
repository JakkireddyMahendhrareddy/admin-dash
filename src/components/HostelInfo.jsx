import React, { useState } from "react";

const HostelInfo = () => {
  const [hostelData, setHostelData] = useState({
    name: "",
    totalGuests: 120,
    maxCapacity: 150,
    vacantRooms: 10,
    occupiedRooms: 40,
    pendingPayments: 15,
  });

  const [showForm, setShowForm] = useState(false);
  const [newHostel, setNewHostel] = useState({
    name: "",
    totalGuests: "",
    maxCapacity: "",
    vacantRooms: "",
    occupiedRooms: "",
    pendingPayments: "",
  });

  const handleInputChange = (e) => {
    setNewHostel({ ...newHostel, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHostelData({ ...newHostel });
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        🏠 Hostel Overview
      </h1>
      <p className="text-gray-800 text-md">Latest hostel status at a glance.</p>

      <button
        onClick={() => setShowForm(!showForm)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {showForm ? "Cancel" : "Add Hostel"}
      </button>

      {showForm && (
        <form
          className="mt-4 bg-white p-5 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Hostel Name"
            className="border p-2 w-full mb-2"
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="totalGuests"
            placeholder="Total Guests"
            className="border p-2 w-full mb-2"
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="maxCapacity"
            placeholder="Max Capacity"
            className="border p-2 w-full mb-2"
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="vacantRooms"
            placeholder="Vacant Rooms"
            className="border p-2 w-full mb-2"
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="occupiedRooms"
            placeholder="Occupied Rooms"
            className="border p-2 w-full mb-2"
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="pendingPayments"
            placeholder="Pending Payments"
            className="border p-2 w-full mb-2"
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Save Hostel
          </button>
        </form>
      )}

      {/* Hostel Information */}
      {!showForm && (
        <div className="mt-6 bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">
            🏠 {hostelData.name || "Sunrise Boys Hostel"}
          </h2>
          <p>
            <strong>Total Guests:</strong> {hostelData.totalGuests} /{" "}
            {hostelData.maxCapacity}
          </p>
          <p>
            <strong>Vacant Rooms:</strong> {hostelData.vacantRooms}
          </p>
          <p>
            <strong>Occupied Rooms:</strong> {hostelData.occupiedRooms}
          </p>
          <p>
            <strong>Pending Payments:</strong> {hostelData.pendingPayments}
          </p>
        </div>
      )}
    </div>
  );
};

export default HostelInfo;
