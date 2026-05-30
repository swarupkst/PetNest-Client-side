"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

export default function PetDetails({ pet }) {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleAdopt = () => {
    if (!session?.user) {
      router.push("/login");
      return;
    }

    console.log("Open Adoption Modal", pet._id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={pet.image}
            alt={pet.petName}
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            {pet.petName}
          </h1>

          <div className="space-y-3 text-gray-700">
            <p><strong>Species:</strong> {pet.species}</p>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <p><strong>Age:</strong> {pet.age}</p>
            <p><strong>Gender:</strong> {pet.gender}</p>
            <p><strong>Health Status:</strong> {pet.healthStatus}</p>
            <p><strong>Vaccination Status:</strong> {pet.vaccinationStatus}</p>
            <p><strong>Location:</strong> {pet.location}</p>
            <p><strong>Adoption Fee:</strong> ${pet.adoptionFee}</p>
            <p><strong>Owner Email:</strong> {pet.ownerEmail}</p>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">
              Description
            </h3>
            <p className="text-gray-600">
              {pet.description}
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleAdopt}
            className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Adopt Now
          </button>
        </div>
      </div>
    </div>
  );
}