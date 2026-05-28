
"use client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const pets = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    age: "2 years",
    location: "Dhaka",
    image: "/asset/pet1.jpg",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    age: "1 year",
    location: "Khulna",
    image: "/asset/pet2.jpg",
  },
  {
    id: 3,
    name: "Charlie",
    type: "Dog",
    age: "3 years",
    location: "Chattogram",
    image: "/asset/pet3.jpg",
  },
  {
    id: 4,
    name: "Milo",
    type: "Rabbit",
    age: "8 months",
    location: "Rajshahi",
    image: "/asset/pet4.jpg",
  },
  {
    id: 5,
    name: "Bella",
    type: "Cat",
    age: "2 years",
    location: "Sylhet",
    image: "/asset/pet5.jpg",
  },
  {
    id: 6,
    name: "Rocky",
    type: "Dog",
    age: "4 years",
    location: "Barishal",
    image: "/asset/pet6.jpg",
  },
];

const Pets = () => {
  return (
    <section className="pt-5 py-16 bg-gray-50">
      
      {/* Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {pets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >

            {/* Image */}
            <div className="relative w-full h-52">
              <Image
                src={pet.image}
                alt={pet.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-black">{pet.name}</h3>

              <p className="text-gray-500 text-sm">
                {pet.type} • {pet.age}
              </p>

              <p className="text-gray-400 text-sm">
                {pet.location}
              </p>

              {/* Button */}
              <Link
                href={`/pets/${pet.id}`}
                className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                View Details
              </Link>
            </div>

          </div>
        ))}
            
      </div>
    <div className="flex justify-center pt-10">
  <Link
    href="/pets"
    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
  >
    <span>View All Pets</span>
    <FaArrowRight className="text-sm" />
  </Link>
</div>
    </section>
  );
}

export default Pets
