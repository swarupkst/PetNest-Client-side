export default function PetsSearchFilter({
  searchTerm,
  setSearchTerm,
  speciesFilter,
  setSpeciesFilter,
  speciesList,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-10">
      <input
        type="text"
        placeholder="Search by pet name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input input-bordered w-full"
      />

      <select
        value={speciesFilter}
        onChange={(e) => setSpeciesFilter(e.target.value)}
        className="select select-bordered w-full md:w-60"
      >
        {speciesList.map((species) => (
          <option key={species} value={species}>
            {species}
          </option>
        ))}
      </select>
    </div>
  );
}