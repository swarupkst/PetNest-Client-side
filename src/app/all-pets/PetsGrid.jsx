import Link from "next/link";

export default function PetsGrid({ pets }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={pet.image}
              alt={pet.petName}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">{pet.petName}</h2>

              <p className="text-gray-500 mt-1">{pet.species}</p>
              <p className="text-gray-500">Breed: {pet.breed}</p>
              <p className="text-gray-500">Age: {pet.age}</p>
              <p className="text-gray-500">Location: {pet.location}</p>

              <p className="font-bold text-orange-500 mt-2">
                ${pet.adoptionFee}
              </p>

              <Link
                href={`/pets/${pet._id}`}
                className="mt-4 block text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {pets.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No pets found 🐾
          </h2>
        </div>
      )}
    </>
  );
}