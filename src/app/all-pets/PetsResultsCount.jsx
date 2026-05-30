export default function PetsResultsCount({ count }) {
  return (
    <p className="mb-6 text-gray-600">
      Showing {count} pet(s)
    </p>
  );
}