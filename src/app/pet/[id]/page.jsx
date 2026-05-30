import PetDetails from "./PetDetails";

async function getPet(id) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch pet");
  }

  return res.json();
}

export default async function PetDetailsPage({ params }) {
  const pet = await getPet(params.id);

  return <PetDetails pet={pet} />;
}