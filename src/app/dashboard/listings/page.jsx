"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { authClient } from "@/app/lib/auth-client";
import LoadingSpinner from "@/components/LoadingSpinner";
import RequestsModal from "@/components/RequestsModal";

export default function MyListings() {
  const { data: session } = authClient.useSession();

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPet, setSelectedPet] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // FETCH MY PETS
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchPets = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:5000/my-listings/${session.user.email}`
        );

        const data = await res.json();
        setPets(data);
      } catch (error) {
        toast.error("Failed to load pets");
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, [session]);

  // DELETE PET
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/pets/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Pet deleted");

        setPets((prev) =>
          prev.filter((pet) => pet._id !== id)
        );
      }
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  // STATS
  const total = pets.length;
  const available = pets.filter(
    (p) => p.status === "Available"
  ).length;
  const adopted = pets.filter(
    (p) => p.status === "Adopted"
  ).length;

  if (loading) return <LoadingSpinner />;

  return (
    <div className="space-y-8">
      {/* TITLE */}
      <h1 className="text-3xl font-bold text-gray-800">
        My Listings
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Total Listings</h3>
          <p className="text-3xl font-bold">{total}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Available</h3>
          <p className="text-3xl font-bold text-green-500">
            {available}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Adopted</h3>
          <p className="text-3xl font-bold text-blue-500">
            {adopted}
          </p>
        </div>
      </div>

      {/* PET CARDS */}
      <div className="grid md:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-2xl shadow overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={pet.image}
              alt={pet.petName}
              className="h-52 w-full object-cover"
            />

            {/* INFO */}
            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold">
                {pet.petName}
              </h2>

              <p className="text-gray-600">
                ${pet.adoptionFee}
              </p>

              <p className="text-sm text-gray-500">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    pet.status === "Available"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {pet.status}
                </span>
              </p>

              {/* BUTTONS */}
              <div className="grid grid-cols-2 gap-2 pt-3">
                {/* REQUESTS MODAL */}
                <button
                  onClick={() => {
                    setSelectedPet(pet);
                    setOpenModal(true);
                  }}
                  className="bg-purple-500 text-white py-2 rounded-lg"
                >
                  Requests
                </button>

                {/* EDIT */}
                <Link
                  href={`/dashboard/edit/${pet._id}`}
                  className="bg-yellow-500 text-white py-2 rounded-lg text-center"
                >
                  Edit
                </Link>

                {/* VIEW */}
                <Link
                  href={`/pets/${pet._id}`}
                  className="bg-green-500 text-white py-2 rounded-lg text-center"
                >
                  View
                </Link>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(pet._id)}
                  className="bg-red-500 text-white py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && selectedPet && (
        <RequestsModal
          pet={selectedPet}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}