"use client";

import { useEffect, useState } from "react";
import PetsHeader from "./PetsHeader";
import PetsSearchFilter from "./PetsSearchFilter";
import PetsResultsCount from "./PetsResultsCount";
import PetsGrid from "./PetsGrid";

export default function PetsPage() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`)
      .then((res) => res.json())
      .then((data) => {
        setPets(data);
        setFilteredPets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = pets;

    if (searchTerm) {
      filtered = filtered.filter((pet) =>
        pet.petName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (speciesFilter !== "All") {
      filtered = filtered.filter((pet) => pet.species === speciesFilter);
    }

    setFilteredPets(filtered);
  }, [searchTerm, speciesFilter, pets]);

  const speciesList = ["All", ...new Set(pets.map((pet) => pet.species))];

  // Spinner (ONLY data fetch)
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <PetsHeader />

      <PetsSearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        speciesFilter={speciesFilter}
        setSpeciesFilter={setSpeciesFilter}
        speciesList={speciesList}
      />

      <PetsResultsCount count={filteredPets.length} />

      <PetsGrid pets={filteredPets} />

    </div>
  );
}