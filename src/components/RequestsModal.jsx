"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function RequestsModal({ pet, onClose }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/requests/pet/${pet._id}`
        );

        const data = await res.json();
        setRequests(data);
      } catch (error) {
        toast.error("Failed to load requests");
      }
    };

    fetchRequests();
  }, [pet]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-2xl rounded-2xl p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">
            Requests for {pet.petName}
          </h2>

          <button onClick={onClose}>✖</button>
        </div>

        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {requests.length === 0 && (
            <p>No requests found</p>
          )}

          {requests.map((req) => (
            <div
              key={req._id}
              className="border p-3 rounded-lg"
            >
              <p>Email: {req.userEmail}</p>
              <p>Pickup: {req.pickupDate}</p>
              <p>Status: {req.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}